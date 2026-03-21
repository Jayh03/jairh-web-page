import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function DownIcon(props: Props) {
	return (
		<svg
			width='17'
			height='16'
			viewBox='0 0 17 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path
				d='M8.21875 3.33331V12.6666'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12.8841 8L8.21745 12.6667L3.55078 8'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
