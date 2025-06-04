import Image from 'next/image';

import styles from './icon-button.module.scss';

interface IIconButton {
	icon: string;
}

export default function IconButton({ icon }: IIconButton) {
	return (
		<div className={styles.container}>
			<Image
				width={22}
				height={22}
				src={icon ?? '/images/Abajo.svg'}
				alt={'boton'}
			/>
		</div>
	);
}
