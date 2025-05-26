import { NavigationLink } from '@/components';
import { NavigatorLogoJH, XIcon } from '@/components/icons';
import { IMobileMenu } from '@/interfaces';

import styles from './mobile-menu.module.scss';

export default function MobileMenu({ isOpen, onClose }: IMobileMenu) {
	return (
		<div
			className={`${styles.container} ${isOpen ? styles.open : styles.close}`}>
			<div className={styles.content}>
				<div className={styles.menu}>
					<NavigatorLogoJH />
					<ul role='list'>
						<li role='listitem'>
							<NavigationLink href={'#aboutme'}>{'Sobre mí'}</NavigationLink>
						</li>
						<li role='listitem'>
							<NavigationLink href={'#myskills'}>
								{'Mis Habilidades'}
							</NavigationLink>
						</li>
						<li role='listitem'>
							<NavigationLink href={'#myprojects'}>
								{'Proyectos'}
							</NavigationLink>
						</li>
						{/*<li role='listitem'>
							<NavigationLink href={'#mycomponnet'}>
								{'Galería de Componnetes'}
							</NavigationLink>
						</li>*/}
						<li role='listitem'>
							<NavigationLink href={'#contact'}>{'Contacto'}</NavigationLink>
						</li>
						<li className={styles.languages} role='listitem'>
							{/*<DropdownLanguages />*/}
						</li>
					</ul>
				</div>
				<button
					role='button'
					aria-label='Botón de Cerrar'
					className={styles.closeButton}
					onClick={onClose}>
					<XIcon color='#0B0B0B' />
				</button>
			</div>
		</div>
	);
}
