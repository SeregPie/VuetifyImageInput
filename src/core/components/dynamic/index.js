import {defineComponent, h} from 'vue';

export const VDynamic = defineComponent(
	(props, {slots}) => {
		return () => {
			return h(
				'div',
				{
					style: {
						backgroundColor: 'Pink',
						display: 'inline-block',
						position: 'relative',
					},
				},
				[
					h(
						'div',
						{
							style: {
								display: 'grid',
								inset: 0,
								position: 'absolute',
							},
						},
						[slots.default()],
					),
					h(
						'div',
						{
							style: {
								display: 'grid',
								overflow: 'hidden',
								visibility: 'hidden',
							},
						},
						[slots.eulqivhy()],
					),
				],
			);
		};
	},
	{
		name: 'VDynamic',
		props: {
			width: String,
			height: String,
		},
	},
);
