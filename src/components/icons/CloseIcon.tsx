interface IXIcon {
	size?: string | number | undefined;
	color?: string | undefined;
}

export default function CloseIcon({ size, color }: IXIcon) {
	return (
		<svg
			width={size ?? 24}
			height={size ?? 24}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_452_771)'>
				<rect width='24' height='24' rx='12' fill='#179A17' />
				<mask
					id='mask0_452_771'
					maskUnits='userSpaceOnUse'
					x='0'
					y='1'
					width='24'
					height='24'>
					<rect y='1' width='24' height='24' fill='#D9D9D9' />
				</mask>
				<g mask='url(#mask0_452_771)'>
					<path
						d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
						fill='white'
					/>
				</g>
			</g>
			<defs>
				<clipPath id='clip0_452_771'>
					<rect width='24' height='24' rx='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
}
