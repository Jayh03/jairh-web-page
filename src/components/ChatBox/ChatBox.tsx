'use client';
import { useState, useEffect, useRef } from 'react';
import { CloseIcon, NavigatorLogoJH, SendIcon } from '../icons';
import { useTranslations } from 'next-intl';

import styles from './chat-box.module.scss';

export default function ChatBox() {
	const t = useTranslations('ChatBot');
	const [messages, setMessages] = useState<{ user: boolean; text: string }[]>(
		[]
	);
	const [input, setInput] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const chatEndRef = useRef<HTMLDivElement>(null);
	const chatRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			setMessages([
				{
					user: false,
					text: t('welcomeMessage')
				}
			]);
		}
	}, [isOpen, messages.length, t]);

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
				{ user: false, text: t('errorMessage') }
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
				<>
					<button
						className={styles['chat-toggle-btn']}
						onClick={() => setIsOpen(true)}
						aria-label={t('openChat')}>
						<NavigatorLogoJH size={28} />
					</button>
					<span className={styles.arrow}></span>
					<span className={styles.hello}>{t('resolveDubts')}</span>
				</>
			)}

			{isOpen && (
				<div className={styles['chat-container']} ref={chatRef}>
					<div className={styles['chat-profile']}>
						<div className={styles['chat-profile-two']}>
							<div className={styles['avatar-wrapper']}>
								<NavigatorLogoJH size={28} />
							</div>
							<p>{t('virtualAssistant')}</p>
						</div>
						<button
							className={styles['close-btn']}
							onClick={() => setIsOpen(false)}
							aria-label={t('closeChat')}>
							<CloseIcon size={16} />
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
							placeholder={t('placeholder')}
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
