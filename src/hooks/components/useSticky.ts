import { useEffect, useState } from 'react';

export default function useSticky() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const header = document.getElementById('header');
		if (!header) return;

		const handleScroll = () => {
			const isHeaderSticky = window.scrollY > 0;

			if (isHeaderSticky !== isSticky) {
				setIsSticky(isHeaderSticky);
			}
		};

		// Verificar posición inicial
		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isSticky]);

	return { isSticky };
}
