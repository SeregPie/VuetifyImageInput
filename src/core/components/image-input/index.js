import {computed, defineComponent, h} from 'vue';

export const VImageInput = defineComponent(
	(props, {expose}) => {
		let imageWidth$ = computed(() => props.imageWidth ?? 256);
		let imageHeight$ = computed(() => props.imageHeight ?? 256);

		let flipHorizontally = () => {};
		let flipVertically = () => {};
		let rotateInDegrees = () => {};
		let rotateInTurns = () => {};
		let rotateInRadians = () => {};
		let moveLeft = () => {};
		let moveRight = () => {};
		let moveUp = () => {};
		let moveDown = () => {};
		let reset = () => {};
		let clear = () => {};

		expose({
			flipHorizontally,
			flipVertically,
			rotateInDegrees,
			rotateInTurns,
			rotateInRadians,
			moveLeft,
			moveRight,
			moveUp,
			moveDown,
			reset,
			clear,
		});
		return () => {
			let imageWidth = imageWidth$.value;
			let imageHeight = imageHeight$.value;
			return h('div', {
				style: {
					display: 'inline-block',
					width: `${imageWidth}px`,
					height: `${imageHeight}px`,
					backgroundColor: 'Pink',
				},
			});
		};
	},
	{
		name: 'VImageInput',
		props: {
			modelValue: {},
			imageWidth: Number,
			imageHeight: Number,
			disabled: Boolean,
			readonly: Boolean,
		},
	},
);
