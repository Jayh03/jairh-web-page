import { useEffect, useState } from 'react';

export default function useSticky() {
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const header = document.getElementById('header');
		if (!header) return;

		const stickyOffset = header.offsetTop;

		const handleScroll = () => {
			const isHeaderSticky = window.scrollY > stickyOffset;

			setIsSticky(isHeaderSticky);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { isSticky };
}
