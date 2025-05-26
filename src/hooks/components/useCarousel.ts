import { useEffect, useRef, useState } from 'react';

export default function useCarousel() {
	const [maxScroll, setMaxScroll] = useState<number>(0);
	const [position, setPosition] = useState<number>(0);
	const [buttonLeft, setButtonLeft] = useState<boolean>(true);
	const [buttonRight, setButtonRight] = useState<boolean>(false);
	const mainCarousel = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// @ts-ignore
		setMaxScroll(mainCarousel.current?.scrollWidth);
		setButtonRight(maxScroll < 1400);
	}, [maxScroll]);

	const handleScroll = (e: any) => {
		// @ts-ignore
		let width =
			mainCarousel.current!.offsetWidth > 1920
				? 1920
				: mainCarousel.current?.offsetWidth;
		if (position < 100) {
			setButtonLeft(true);
		} else if (position > 0) {
			setButtonLeft(false);
		}

		if (position > maxScroll - width! - 100) {
			setButtonRight(true);
		} else {
			setButtonRight(false);
		}
		setPosition(e.target.scrollLeft);
	};

	return { buttonLeft, buttonRight, handleScroll, mainCarousel };
}
