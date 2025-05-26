import { ITitles } from '@/interfaces';

import styles from './titles.module.scss';

export default function Titles({ title }: ITitles) {
	return (
		<div className={styles.container}>
			<h2>{title}</h2>
		</div>
	);
}
