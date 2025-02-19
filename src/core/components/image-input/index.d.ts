import {DefineSetupFnComponent} from 'vue';

export const VImageInput: VImageInput.Rvqsbukg;

export type VImageInput = InstanceType<VImageInput.Rvqsbukg>;

export namespace VImageInput {
	// todo: Partial?
	export type Props = {
		modelValue: string | null;
		imageWidth: number;
		imageHeight: number;
		disabled: boolean;
		readonly: boolean;
	};

	export type Emits = {
		// todo: EmitFunction?
		// todo: use Props?
		['update:modelValue']: {(e: Props['modelValue']): void};
	};

	export type Slots = {};

	export type Exposed = {
		flipHorizontally: {(): void};
		flipVertically: {(): void};
		rotateInDegrees: {(by: number): void};
		rotateInTurns: {(by: number): void};
		rotateInRadians: {(by: number): void};
		moveLeft: {(by: number): void};
		moveRight: {(by: number): void};
		moveUp: {(by: number): void};
		moveDown: {(by: number): void};
		reset: {(): void};
		clear: {(): void};
	};

	// todo: rename
	export type Rvqsbukg = DefineSetupFnComponent<Partial<Props>, Emits, Slots>;
}
