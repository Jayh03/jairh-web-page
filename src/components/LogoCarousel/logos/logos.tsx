import ILogo from '@/interfaces/components/Logocarousel/Logo';
import Image from 'next/image';

export default function Logo({ image, description, width }: ILogo) {
	return (
		<Image
			width={124}
			height={154}
			src={image}
			alt={description}
			loading='eager'
			quality={100}
			style={{ objectFit: 'cover' }}
		/>
	);
}
