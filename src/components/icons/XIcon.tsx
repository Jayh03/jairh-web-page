interface IXIcon {
	size?: string | number | undefined;
	color?: string | undefined;
}

export default function XIcon({ size, color }: IXIcon) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ?? '32'}
			height={size ?? '32'}
			viewBox='0 0 32 32'
			fill='none'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M24.9431 7.05703C25.4638 7.57773 25.4638 8.42195 24.9431 8.94265L8.94313 24.9426C8.42244 25.4633 7.57822 25.4633 7.05752 24.9426C6.53682 24.4219 6.53682 23.5777 7.05752 23.057L23.0575 7.05703C23.5782 6.53633 24.4224 6.53633 24.9431 7.05703Z'
				fill={color ?? 'white'}
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M7.05752 7.05703C7.57822 6.53633 8.42244 6.53633 8.94313 7.05703L24.9431 23.057C25.4638 23.5777 25.4638 24.4219 24.9431 24.9426C24.4224 25.4633 23.5782 25.4633 23.0575 24.9426L7.05752 8.94265C6.53682 8.42195 6.53682 7.57773 7.05752 7.05703Z'
				fill={color ?? 'white'}
			/>
		</svg>
	);
}
