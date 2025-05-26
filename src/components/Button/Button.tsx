import Link from 'next/link';
import IContactButton from '@/interfaces/components/ContactButton/ContactButton';
import { ArrowIcon } from '../icons';

import styles from './button.module.scss';

export default function Button({ title, url }: IContactButton) {
	return (
		<Link
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className={styles.button}>
			{title} <ArrowIcon />
		</Link>
	);
}
