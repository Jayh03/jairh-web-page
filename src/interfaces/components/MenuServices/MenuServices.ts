import { IOurServicesCard } from '@/interfaces';

export interface ICategorySelector {
	title: string;
	onClick?: () => void;
	isSelected?: boolean;
}

export interface ICarouselTypeThree {
	itemsList: Array<IOurServicesCard>;
}
export interface ICategorySelectorTwo {
	image: string;
	title: string;
	description: string;
	onClick?: () => void;
	isSelected?: boolean;
}

export interface IContentBlock {
	info: Array<IOurServicesCard>;
	isSelected?: boolean;
}

export interface IContentBlockTwo {
	info: IIconsTwo[];
	urlimage: string;
	title: string;
	isSelected?: boolean;
}
export interface IIconsTwo {
	urlimage: string;
	title: string;
}
export interface IContentBlockThree {
	itemsList: Array<IIconsTwo>;
}
