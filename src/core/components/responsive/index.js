import {computed, defineComponent, h} from 'vue';

export const VResponsive = defineComponent(
	(props, {slots}) => {
		let width$ = computed(() => props.width);
		let height$ = computed(() => props.height);
		let aspectRatio$ = computed(() => {
			let width = width$.value;
			let height = height$.value;
			if (width != null && height != null) {
				return `calc(${width} / ${height})`;
			}
		});
		return () => {
			let width = width$.value;
			let height = height$.value;
			let aspectRatio = aspectRatio$.value;
			console.log(aspectRatio);
			return h(
				'div',
				{
					style: {
						display: 'grid',
						aspectRatio: aspectRatio,
						backgroundColor: 'Pink',
						overflow: 'hidden',
					},
				},
				[
					h('div', {
						style: {
							display: 'block',
							visibility: 'hidden',
							width: width,
							height: height,
						},
					}),
				],
			);
		};
	},
	{
		name: 'VResponsive',
		props: {
			width: String,
			height: String,
		},
	},
);
