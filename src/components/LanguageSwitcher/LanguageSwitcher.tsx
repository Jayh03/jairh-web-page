'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import styles from './language-switcher.module.scss';

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleLanguageChange = (newLanguage: 'es' | 'en') => {
		router.replace(pathname, { locale: newLanguage });
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Cerrar dropdown al hacer clic fuera
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className={styles.languageSwitcher} ref={dropdownRef}>
			<button
				className={styles.circularButton}
				onClick={toggleDropdown}
				aria-label='Cambiar idioma'
				aria-expanded={isOpen}>
				{locale.toUpperCase()}
			</button>
			{isOpen && (
				<div className={styles.dropdown}>
					<button
						className={`${styles.dropdownOption} ${locale === 'es' ? styles.active : ''}`}
						onClick={() => handleLanguageChange('es')}
						aria-label='Cambiar a español'>
						ES
					</button>
					<button
						className={`${styles.dropdownOption} ${locale === 'en' ? styles.active : ''}`}
						onClick={() => handleLanguageChange('en')}
						aria-label='Change to English'>
						EN
					</button>
				</div>
			)}
		</div>
	);
}
