export interface IButtonCustom {
	title: string;
	url: string;
	colorTitle?: string;
	colorBackground?: string;
	icon: string;
	variant?: 'default' | 'cv';
	isBorder?: boolean;
	onTarget?: boolean;
}
