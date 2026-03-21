import styles from './round-button.module.scss';
import { IRoundButtonTwo } from '@/interfaces/components/RoundButton/RoundButton';

export default function RoundButton({
	onClick,
	disabled = false,
	icon
}: IRoundButtonTwo) {
	const isLeft = icon.includes('left');

	return (
		<button
			className={styles['round-button']}
			disabled={disabled}
			onClick={onClick}
			aria-label={isLeft ? 'Anterior' : 'Siguiente'}>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
				aria-hidden='true'>
				{isLeft ? (
					<polyline points='15 18 9 12 15 6' />
				) : (
					<polyline points='9 18 15 12 9 6' />
				)}
			</svg>
		</button>
	);
}
