import { ChatBox } from '@/components';
import {
	AboutMeTwo,
	Contac,
	FooterSection,
	HeaderSection,
	MyProjects,
	MySkills,
	Testimonials
} from '@/sections';
import AboutMe from '@/sections/Home/AboutMe/AboutMe';

export default function Home() {
	return (
		<>
			<HeaderSection />
			<main>
				<AboutMe />
				<AboutMeTwo />
				<MySkills />
				<MyProjects />
				{/*<Testimonials />*/}
				<Contac />
				<ChatBox />
			</main>
			<FooterSection />
		</>
	);
}
