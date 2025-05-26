import { useState } from 'react';

export default function useOpen() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return { menuOpen, toggleMenu };
}
