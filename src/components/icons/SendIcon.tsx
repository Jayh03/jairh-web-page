interface IXIcon {
	size?: string | number | undefined;
	color?: string | undefined;
}

export default function SendIcon({ size, color }: IXIcon) {
	return (
		<svg
			width='23'
			height='23'
			viewBox='0 0 23 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_454_785)'>
				<path
					d='M20.7361 11.1474L10.3668 11.3284'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M20.7357 11.1475L8.1167 17.4969L10.3664 11.3285L7.90279 5.2423L20.7357 11.1475Z'
					stroke='white'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_454_785'>
					<rect
						width='16'
						height='16'
						fill='white'
						transform='translate(11.1133) rotate(44)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
