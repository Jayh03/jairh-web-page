import { IMobileMenu } from '@/interfaces';
import styles from './hamburger-button.module.scss';

export default function HamburgerButton({ isOpen, onClose }: IMobileMenu) {
	return (
		<button
			className={`${styles.button} ${isOpen ? styles.open : ''}`}
			onClick={onClose}
			role='button'
			aria-label='Hamburger Button'>
			<div className={styles.button__line}></div>
			<div className={styles.button__line}></div>
			<div className={styles.button__line}></div>
		</button>
	);
}
