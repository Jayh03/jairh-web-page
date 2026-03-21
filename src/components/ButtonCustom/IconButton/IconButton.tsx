import Image from 'next/image';
import styles from './icon-button.module.scss';
import { DownIcon } from '../../icons';
import Download from '../../icons/Download';
import EyesIcon from '../../icons/EyesIcon';

interface IIconButton {
	icon: string;
}

export default function IconButton({ icon }: IIconButton) {
	const isDownload = icon === '/image/descargaIcon.svg';
	const isDown = icon === '/image/Abajo.svg';

	return (
		<div className={styles.container}>
			{isDownload ? (
				<Download size={22} color='currentColor' />
			) : isDown ? (
				<EyesIcon size={22} color='currentColor' />
			) : (
				<Image width={22} height={22} src={icon} alt='' aria-hidden='true' />
			)}
		</div>
	);
}
