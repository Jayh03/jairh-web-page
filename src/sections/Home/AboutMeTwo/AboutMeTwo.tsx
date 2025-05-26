import { ArticleTwo } from '@/components';

import styles from './about-me-two.module.scss';

export default function AboutMeTwo() {
	return (
		<div className={styles.container}>
			<div className={styles.aboutme} id='aboutme'></div>
			<ArticleTwo />
		</div>
	);
}
