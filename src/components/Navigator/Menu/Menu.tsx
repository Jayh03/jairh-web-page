import { NavigationLink } from '@/components';

import styles from './menu.module.scss';

export default function Menu() {
	return (
		<ul role='list' className={styles.container}>
			<li className={styles.item} role='listitem'>
				<NavigationLink href={'#aboutme'}>{'Sobre mí'}</NavigationLink>
			</li>
			<li className={styles.item} role='listitem'>
				<NavigationLink href={'#myskills'}>{'Mis Habilidades'}</NavigationLink>
			</li>
			<li className={styles.item} role='listitem'>
				<NavigationLink href={'#myprojects'}>{'proyectos'}</NavigationLink>
			</li>
			{/*<li className={styles.item} role='listitem'>
				<NavigationLink href={'#mycomponnet'}>
					{'galeía de componentes'}
				</NavigationLink>
			</li>*/}
			<li className={styles.item} role='listitem'>
				<NavigationLink href={'#contact'}>{'contacto'}</NavigationLink>
			</li>
			<li className={styles.container__services}>
				{/*<DropdownLanguages />*/}
			</li>
		</ul>
	);
}
