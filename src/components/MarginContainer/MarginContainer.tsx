import { IMarginContainer } from '@/interfaces';
import styles from './margin-container.module.scss';

export default function MarginContainer({
	children,
	className
}: IMarginContainer) {
	return (
		<div className={`${styles.marginContainer} ${className || ''}`}>
			<div className={styles.marginContainer__main}>{children}</div>
		</div>
	);
}
