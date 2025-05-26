import { IContentBlock } from '@/interfaces/components/MenuServices/MenuServices';
import CarouselTypeThree from '@/components/CarouselTypeThree/CarouselTypeThree';

import styles from './content-block.module.scss';

export default function ContentBlock({ info, isSelected }: IContentBlock) {
	return (
		<section
			className={styles.container}
			id='block'
			style={{
				opacity: isSelected ? 1 : 0,
				position: isSelected ? 'relative' : 'absolute',
				zIndex: isSelected ? 1 : '',
				maxWidth: 1360
			}}>
			<div className={styles.container__content}>
				<CarouselTypeThree itemsList={info} />
			</div>
		</section>
	);
}
