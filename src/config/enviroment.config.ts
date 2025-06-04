interface IEnviroments {
	GEMINI_API_KEY: string;
}

export const ENVIROMENTS: IEnviroments = {
	GEMINI_API_KEY: (process.env.GEMINI_API_KEY as string) || ''
};
