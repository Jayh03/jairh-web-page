import { IMarginContainer } from '@/interfaces';
import styles from './margin-container.module.scss';

export default function MarginContainer({ children }: IMarginContainer) {
	return (
		<div className={styles.marginContainer}>
			<div className={styles.marginContainer__main}>{children}</div>
		</div>
	);
}
