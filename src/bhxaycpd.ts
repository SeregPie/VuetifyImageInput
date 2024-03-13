import {PropType, defineComponent, ref} from 'vue';

const any: any = null;

export default defineComponent({
	name: 'VImageInput',
	props: {
		width: Number,
		height: Number,
		gg: String as PropType<'cover' | 'contain'>,
	},
	emits: {
		error(e: Error) {},
		file(e: File) {},
	},
	slots: {},
	setup(props, {expose, emit}) {
		const rotate: {(n: number): void} = any;
		const rotateClockwise: {(): void} = any;
		const rotateCounterClockwise: {(): void} = any;
		const flipHorizontally: {(): void} = any;
		const flipVertically: {(): void} = any;
		expose({
			rotate,
			rotateClockwise,
			rotateCounterClockwise,
			flipHorizontally,
			flipVertically,
		});
		emit('error', any);
		emit('file', any as File);
		return () => {};
	},
});

const Comp = defineComponent(
	<T extends string | number>(props: {msg: T; list: T[]}) => {
		// use Composition API here like in <script setup>
		const count = ref(0);

		return () => {
			// render function or JSX
			return count.value;
		};
	},
	// manual runtime props declaration is currently still needed.
	{
		props: ['msg', 'list'],
	},
);
