export function onRightClick(ref: any, scroll: number) {
	ref.current?.scrollBy({
		top: 0,
		left: screen.width,
		behavior: 'smooth'
	});
}

export function onLeftClick(ref: any, scroll: number) {
	ref.current?.scrollBy({
		top: 0,
		left: -screen.width,
		behavior: 'smooth'
	});
}

export function onMotion(
	ref: any,
	index: number,
	newIndex: number,
	leftScroll: number
) {
	const rest = newIndex - index;
	const scroll = rest * leftScroll;
	ref.current?.scrollBy({
		top: 0,
		left: scroll,
		behavior: 'smooth'
	});
}

export function onRightClickTwo(ref: any, scroll: number) {
	ref.current?.scrollBy({
		top: 0,
		left: scroll,
		behavior: 'smooth'
	});
}

export function onLeftClickTwo(ref: any, scroll: number) {
	ref.current?.scrollBy({
		top: 0,
		left: -scroll,
		behavior: 'smooth'
	});
}
