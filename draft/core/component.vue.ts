import {SetupContext, defineComponent} from 'vue';

const VImageInput = defineComponent(
	(
		props: Partial<{
			modelValue: null | string;
			width: number;
			height: number;
		}>,
		ctx: SetupContext<{}, {}> & {expose(exposed: {}): void},
	) => {
		throw null;
	},
);

export default VImageInput;
