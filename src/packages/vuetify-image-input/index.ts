import {defineComponent, h, PropType} from 'vue';
import {VInput} from 'vuetify/components/VInput';

const VImageInput = defineComponent({
	name: 'VImageInput',

	//inheritAttrs: false,

	props: {
		clearable: Boolean,
		disabled: Boolean,
		hideDetails: [Boolean, String] as PropType<boolean | 'auto'>,
		id: String,
		label: String,
		messages: {
			type: [String, Array] as PropType<string | Array<string>>,
			default: () => [],
		},
		modelValue: {}, // todo?
		name: String,
		readonly: Boolean,
	},

	//emits: {},

	setup(props) {
		return () => {
			const {
				disabled,
				hideDetails,
				id,
				label,
				messages,
				modelValue,
				name,
				readonly,
			} = props;
			return h(
				VInput,
				{
					disabled,
					hideDetails,
					id,
					label,
					messages,
					modelValue,
					name,
					readonly,
				},
				{
					default: () => {
						return h('div', {
							style: {
								['width']: '128px',
								['height']: '128px',
								['background-color']: 'Green',
							},
						});
					},
				},
			);
		};
	},
});

export default VImageInput;
