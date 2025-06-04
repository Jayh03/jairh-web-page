'use server';
import { NextResponse } from 'next/server';
import { systemContext } from '@/data/context';
import { ENVIROMENTS } from '@/config';

export async function POST(req: Request) {
	const { message } = await req.json();

	const res = await fetch(
		`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${ENVIROMENTS.GEMINI_API_KEY}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
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

	const data = await res.json();
	const reply =
		data?.candidates?.[0]?.content?.parts?.[0]?.text ||
		'Lo siento, no puedo responder esa pregunta.';

	return NextResponse.json({ reply });
}
