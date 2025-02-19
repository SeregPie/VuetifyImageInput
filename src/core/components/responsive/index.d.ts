import {DefineSetupFnComponent} from 'vue';

export const VResponsive: VResponsive.Rvqsbukg;

export type VResponsive = InstanceType<VResponsive.Rvqsbukg>;

export namespace VResponsive {
	// todo: Partial?
	export type Props = {
		width: string;
		height: string;
	};

	export type Emits = {};

	export type Slots = {};

	// todo: rename
	export type Rvqsbukg = DefineSetupFnComponent<Partial<Props>, Emits, Slots>;
}
