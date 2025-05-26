import { IConten } from '@/interfaces';

import styles from './conten.module.scss';

export default function Conten({
	parafone,
	paraftwo,
	parafthree,
	paraffour,
	paraffive,
	parafsix,
	spanone,
	spantwo,
	spanthree,
	spanfour,
	parafseven,
	parafeight,
	spanfive,
	parafnine
}: IConten) {
	return (
		<div className={styles.container}>
			<p>
				{parafone}
				<span>{spanone}</span>
			</p>
			<p>
				{paraftwo}
				<span>{spantwo}</span>
				{parafthree}
			</p>
			<p>
				{paraffour}
				<span>{spanthree}</span>
				{paraffive}
				<span>{spanfour}</span>
				{parafsix}
			</p>
			<p>{parafseven}</p>
			<p>
				{parafeight}
				<span>{spanfive}</span>
				{parafnine}
			</p>
		</div>
	);
}
