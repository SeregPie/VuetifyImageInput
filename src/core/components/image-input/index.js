import {computed, defineComponent, h} from 'vue';

import {VDynamic} from '../dynamic';

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
			return h(
				'div',
				{
					style: {
						display: 'inline-flex',
						placeItems: 'center',
						placeContent: 'center',
						backgroundColor: 'Green',
						position: 'relative',
						width: '100%',
						height: '100%',
					},
				},
				[
					h(VDynamic, null, {
						default: () =>
							h('div', {
								style: {
									backgroundColor: 'Pink',
								},
							}),
						eulqivhy: () =>
							h('div', {
								style: {
									width: `${imageWidth}px`,
									height: `${imageHeight}px`,
								},
							}),
					}),
				],
			);
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
