import { NavigationLink } from '@/components';

import styles from './menu-item.module.scss';

export default function MenuItem() {
	return (
		<>
			<li className={styles.item} role='listitem'>
				<NavigationLink href={'/'}>{'home'}</NavigationLink>
			</li>
			<li className={styles.item} role='listitem'>
				<NavigationLink href={`/`}>{'infrastructure'}</NavigationLink>
			</li>
		</>
	);
}
