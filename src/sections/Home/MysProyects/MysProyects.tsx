import { MarginContainer, MenuProjects, Titles } from '@/components';

import styles from './mys-proyects.module.scss';

export default function MyProjects() {
	return (
		<div className={styles.container}>
			<div className={styles.myprojects} id='myprojects'></div>
			<MarginContainer>
				<Titles title={'Proyectos'} />
				<p className={styles.texts}>
					{
						'Los siguentes son proyectos en los cuales he participado a lo largo de mi carrera.'
					}
				</p>
				<MenuProjects />
			</MarginContainer>
		</div>
	);
}
