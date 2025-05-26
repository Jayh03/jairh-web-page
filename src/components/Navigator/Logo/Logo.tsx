import Link from 'next/link';
import { MAIN_ROUTES } from '@/routes';
import { NavigatorLogoJH } from '@/components/icons';

export default function Logo() {
	return (
		<Link href={MAIN_ROUTES.home} aria-label='Página principal'>
			<NavigatorLogoJH />
		</Link>
	);
}
