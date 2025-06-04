'use client';
import { useState, useEffect, useRef } from 'react';
import { BotIcon, CloseIcon, NavigatorLogoJH, SendIcon } from '../icons';
import styles from './chat-box.module.scss';

export default function ChatBox() {
	const [messages, setMessages] = useState<{ user: boolean; text: string }[]>(
		[]
	);
	const [input, setInput] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const chatEndRef = useRef<HTMLDivElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

	const MAX_PREGUNTAS = 5;
	const LIMITE_TIEMPO_MS = 24 * 60 * 60 * 1000;

	const verificarYReiniciarContador = () => {
		const timestamp = localStorage.getItem('preguntasTimestamp');
		if (timestamp) {
			const tiempoTranscurrido = Date.now() - parseInt(timestamp);
			if (tiempoTranscurrido > LIMITE_TIEMPO_MS) {
				localStorage.setItem('preguntas', '0');
				localStorage.setItem('preguntasTimestamp', Date.now().toString());
				console.log('⏰ Contador reiniciado después de 24 horas.');
			}
		} else {
			// Si no hay timestamp, lo inicializamos
			localStorage.setItem('preguntasTimestamp', Date.now().toString());
		}
	};

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			setMessages([
				{
					user: false,
					text: '¡Hola! 👋 Soy el asistente virtual de Jair Henriquez. ¿En qué puedo ayudarte hoy?'
				}
			]);
		}
	}, [isOpen, messages.length]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		verificarYReiniciarContador();

		let preguntasRealizadas = parseInt(
			localStorage.getItem('preguntas') || '0'
		);

		if (preguntasRealizadas >= MAX_PREGUNTAS) {
			const mensajeLimite =
				'Has alcanzado el límite de preguntas. Para más información, comunícate conmigo por WhatsApp: https://wa.me/573106560314 o al correo: jhenriquezpallares@gmail.com';

			setMessages((prev) => [
				...prev,
				{ user: true, text: input },
				{ user: false, text: mensajeLimite }
			]);
			setInput('');
			return;
		}

		// Aumentar y guardar conteo + timestamp si no existe
		preguntasRealizadas += 1;
		localStorage.setItem('preguntas', preguntasRealizadas.toString());

		if (!localStorage.getItem('preguntasTimestamp')) {
			localStorage.setItem('preguntasTimestamp', Date.now().toString());
		}

		const newMessages = [...messages, { user: true, text: input }];
		setMessages(newMessages);
		setInput('');
		setIsTyping(true);

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				body: JSON.stringify({ message: input })
			});
			const data = await res.json();

			setMessages((prev) => [...prev, { user: false, text: data.reply }]);
		} catch (err) {
			setMessages((prev) => [
				...prev,
				{ user: false, text: 'Ocurrió un error al procesar tu consulta.' }
			]);
		} finally {
			setIsTyping(false);
		}
	};

	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isTyping]);

	return (
		<>
			{!isOpen && (
				<button
					className={styles['chat-toggle-btn']}
					onClick={() => setIsOpen(true)}
					aria-label='Abrir chat'>
					<BotIcon />
				</button>
			)}

			{isOpen && (
				<div className={styles['chat-container']} ref={chatRef}>
					<div className={styles['chat-profile']}>
						<div className={styles['chat-profile-two']}>
							<NavigatorLogoJH />
						</div>
						<button
							className={styles['close-btn']}
							onClick={() => setIsOpen(false)}
							aria-label='Cerrar chat'>
							<CloseIcon />
						</button>
					</div>

					<div className={styles['chat-window']}>
						{messages.map((m, i) => (
							<div
								key={i}
								className={`${styles['chat-message']} ${m.user ? styles['user'] : styles['bot']}`}>
								<p className={styles['message-text']}>{m.text}</p>
							</div>
						))}
						{isTyping && (
							<div className={`${styles['chat-message']} ${styles['bot']}`}>
								<div
									className={`${styles['message-text']} ${styles['typing-indicator']}`}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						)}
						<div ref={chatEndRef} />
					</div>

					<div className={styles['chat-input-group']}>
						<input
							id='chat'
							type='text'
							className={styles['chat-input']}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
							placeholder='Consulta tus dudas...'
						/>
						<button className={styles['chat-send-btn']} onClick={sendMessage}>
							<SendIcon />
						</button>
					</div>
				</div>
			)}
		</>
	);
}
