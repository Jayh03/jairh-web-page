import { useEffect, useState } from 'react';

export default function useOpenChat(openInstaChat?: number) {
	const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

	const toggleChat = () => {
		setIsChatOpen(!isChatOpen);
	};

	useEffect(() => {
		if (openInstaChat && openInstaChat > 0) {
			const timer = setTimeout(() => {
				setIsChatOpen(true);
			}, openInstaChat * 1000);

			return () => clearTimeout(timer);
		}
	}, [openInstaChat]);

	return { isChatOpen, toggleChat };
}
