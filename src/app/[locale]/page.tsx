import { ChatBox } from '@/components';
import {
	AboutMeTwo,
	Contac,
	FooterSection,
	HeaderSection,
	MyDesigns,
	MyProjects,
	MySkills,
	Testimonials
} from '@/sections';
import AboutMe from '@/sections/Home/AboutMe/AboutMe';
import { setRequestLocale } from 'next-intl/server';

type Props = {
	params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<HeaderSection />
			<main>
				<AboutMe />
				<AboutMeTwo />
				<MySkills />
				<MyProjects />
				<MyDesigns />
				{/*<Testimonials />*/}
				<Contac />
				<ChatBox />
			</main>
			<FooterSection />
		</>
	);
}
