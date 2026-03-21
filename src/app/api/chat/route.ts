'use server';
import { NextResponse } from 'next/server';
import { systemContext } from '@/data/context';
import { ENVIROMENTS } from '@/config';

function getFallbackReply(message: string): string {
	const msg = message.toLowerCase();

	if (
		/tecnolog|stack|lenguaje|framework|herramienta|react|next|typescript|javascript|css|html/i.test(
			msg
		)
	)
		return 'Jair domina HTML5, CSS3, JavaScript y TypeScript como lenguajes principales. En frameworks utiliza React.js y Next.js. Para versionado usa Git y GitHub, y tiene habilidades en diseño responsivo, accesibilidad y optimización de rendimiento.';

	if (/experiencia|trabaj|año|trayectoria|recorrido/i.test(msg))
		return 'Jair es un desarrollador frontend con años de experiencia construyendo proyectos web modernos. Ha trabajado en múltiples proyectos aplicando tecnologías actuales como React y Next.js, siempre con foco en rendimiento y diseño.';

	if (/proyecto|portafolio|trabajo|galería/i.test(msg))
		return 'Puedes ver los proyectos de Jair directamente en este sitio, en la sección "Mis Proyectos". Cada uno incluye vista previa y descripción técnica.';

	if (/cv|curriculum|hoja de vida|descargar/i.test(msg))
		return 'Puedes descargar el CV de Jair desde el botón "Download CV" en la parte superior del sitio.';

	if (
		/contact|email|correo|teléfono|whatsapp|mensaje|contratar|disponible/i.test(
			msg
		)
	)
		return 'Puedes contactar a Jair en:\n📧 jhenriquezpallares@gmail.com\n📱 +57 310 656 0314\nTambién puedes usar el formulario en la sección de Contacto.';

	if (/proceso|metodolog|flujo|cómo trabajas/i.test(msg))
		return 'El proceso de Jair sigue estas fases: Planeación → Diseño → Desarrollo → Testing → Producción → Mantenimiento. Cada etapa se ejecuta con foco en escalabilidad, rendimiento y atención al detalle.';

	if (/filosofía|estilo|enfoque|desarrollador|cómo eres/i.test(msg))
		return 'Jair cree en la fusión entre diseño y funcionalidad. Cada línea de código debe ser limpia, mantenible y con propósito. Valora la colaboración, la revisión de código y los procesos ágiles.';

	if (/hola|buenas|hey|saludos|hi|hello/i.test(msg))
		return '¡Hola! 👋 Soy el asistente virtual de Jair Henriquez. Puedo contarte sobre sus habilidades, proyectos, tecnologías o cómo contactarlo. ¿En qué te puedo ayudar?';

	if (/quién|quien es jair|presentación|sobre él|sobre ti/i.test(msg))
		return 'Jair Henriquez es un desarrollador frontend apasionado por construir experiencias web modernas, funcionales y estéticas. Es autodidacta, proactivo y orientado a la mejora continua. Le motiva crear productos digitales que destaquen tanto en rendimiento como en diseño.';

	if (/diseñador|diseño|ui|ux|colaborar/i.test(msg))
		return '¡Sí! Jair puede colaborar perfectamente con diseñadores. Tiene conocimientos de UI/UX y diseño responsivo, lo que le permite interpretar y llevar a código cualquier propuesta visual con fidelidad.';

	if (/web|página|sitio|tienda|blog|negocio|empresa/i.test(msg))
		return '¡Claro que sí! Jair puede desarrollar una web moderna, funcional y atractiva para ese tipo de proyecto. Se adapta fácilmente a distintas industrias y públicos, asegurando siempre una experiencia de usuario óptima.';

	return 'Lo siento 😊, solo puedo ayudarte con información relacionada con el perfil, habilidades y proyectos de Jair Henriquez. ¿Te gustaría saber sobre sus tecnologías, proyectos o cómo contactarlo?';
}

export async function POST(req: Request) {
	const { message } = await req.json();

	if (!ENVIROMENTS.GEMINI_API_KEY) {
		return NextResponse.json({ reply: getFallbackReply(message) });
	}

	try {
		const res = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${ENVIROMENTS.GEMINI_API_KEY}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					contents: [
						{
							role: 'user',
							parts: [
								{ text: `${systemContext}\n\nPregunta del usuario: ${message}` }
							]
						}
					]
				})
			}
		);

		if (!res.ok) {
			const errorData = await res.json();
			console.error('Gemini API error:', JSON.stringify(errorData, null, 2));
			return NextResponse.json({ reply: getFallbackReply(message) });
		}

		const data = await res.json();
		const reply =
			data?.candidates?.[0]?.content?.parts?.[0]?.text ||
			getFallbackReply(message);

		return NextResponse.json({ reply });
	} catch (error) {
		console.error('Chat API error:', error);
		return NextResponse.json({ reply: getFallbackReply(message) });
	}
}
