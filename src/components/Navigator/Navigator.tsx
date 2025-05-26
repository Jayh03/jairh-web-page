'use client';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import MobileMenu from './MobileMenu/MobileMenu';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import { useOpen, useSticky } from '@/hooks';
import MarginContainer from '../MarginContainer/MarginContainer';

import styles from './navigator.module.scss';

export default function Navigator() {
	const { isSticky } = useSticky();
	const { menuOpen, toggleMenu } = useOpen();

	const headerClassName = isSticky
		? `${styles.container} ${styles.sticky}`
		: styles.container;

	return (
		<div className={styles.content}>
			<MarginContainer>
				<header className={headerClassName} id='header'>
					<nav className={styles.container__center}>
						<div className={styles.container__center__logo}>
							<Logo />
						</div>
						<Menu />
						<div className={styles.container__menu}>
							<HamburgerButton
								isOpen={menuOpen}
								onClose={toggleMenu}
								buttonTitle={''}
								urlButton={''}
							/>
							<div
								className={`${styles.shadow} ${menuOpen ? styles.open : styles.close}`}
								onClick={toggleMenu}></div>
							<MobileMenu
								isOpen={menuOpen}
								onClose={toggleMenu}
								items={[]}
								buttonTitle={'appointmentScheduler'}
								urlButton={'#contact'}
								isBlank={false}
							/>
						</div>
					</nav>
				</header>
			</MarginContainer>
		</div>
	);
}
