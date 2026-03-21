import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
	// Lista de todos los locales soportados
	locales: ['es', 'en'],

	// Locale por defecto cuando no se especifica ninguno
	defaultLocale: 'es',

	// Siempre mostrar el prefijo de locale en la URL
	localePrefix: 'always'
});

// Navegación y redirección ligeras con next-intl
export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
