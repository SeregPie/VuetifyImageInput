import func from './func';

export default function() {
	let timer;
	return (() => {
		timer = func.call(this, timer);
	});
}
