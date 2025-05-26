import { IMenuItem } from '@/interfaces/components/MobileMenu/Navigator/Navigator';
import { MAIN_ROUTES } from '@/routes';

export const mobileMenuData: Array<IMenuItem> = [
	{
		text: 'Inicio',
		url: MAIN_ROUTES.home
	},
	{
		text: 'Nosotros',
		url: '#'
	},
	{
		text: 'Contacto',
		url: MAIN_ROUTES.home
	},
	{
		text: 'Contact us',
		url: '#'
	},
	{
		text: 'Blog',
		url: MAIN_ROUTES.home
	},
	{
		text: 'FAQs',
		url: '#'
	}
];
