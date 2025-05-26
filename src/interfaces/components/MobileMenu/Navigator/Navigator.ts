export interface IMenuItem {
	text: string;
	url: string;
}

export interface IMenuItems {
	items: Array<IMenuItem>;
}

export interface IMenu {
	items: Array<IMenuItem>;
	buttonTitle: string;
	url: string;
}

export interface INavigator {
	appointmentScheduler: string;
}
