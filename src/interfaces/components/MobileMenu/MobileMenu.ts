import { IMenuItem } from './Navigator/Navigator';

export interface IMobileMenu {
	isOpen: boolean;
	onClose: () => void;
	items?: Array<IMenuItem>;
	buttonTitle: string;
	urlButton: string;
	isBlank?: boolean;
}
