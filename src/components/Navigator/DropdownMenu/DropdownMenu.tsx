import { ChevronUpIcon } from '@/components/icons';
import { NavigationLink } from '@/components';

import styles from './dropdown-menu.module.scss';

export default function DropdownMenu() {
	return (
		<div className={styles.container}>
			<div className={styles.dropdown}>
				<div className={styles.dropbtn}>{'services'}</div>

				<ChevronUpIcon />

				<div className={styles.displayIcon}></div>
				<div className={styles.dropdownContent}>
					<NavigationLink href={`/infrastructure`}>
						{'infrastructure'}
					</NavigationLink>
					<NavigationLink href={`/`}>{'telecommunications'}</NavigationLink>
					<NavigationLink href={`/`}>{'cybersecurity'}</NavigationLink>
				</div>
			</div>
		</div>
	);
}
