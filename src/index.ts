import {defineComponent, h, shallowRef, watchEffect} from 'vue';

const VImageInput = defineComponent(
	(
		props: Partial<{
			modelValue: null | string;
			width: number;
			height: number;
		}>,
		{slots, emit, expose},
	) => {
		// todo: rename
		let gyctthkvRef = shallowRef<unknown>(null);

		let clear = () => {
			gyctthkvRef.value = null;
		};

		// todo: rename
		let pyjlbndg = (file: File) => {
			emit('file', file);
			gyctthkvRef.value = file;
		};

		let pendingRef = shallowRef<boolean>(false);

		watchEffect(async (onCleanup) => {
			let controller = new AbortController();
			onCleanup(() => {
				controller.abort();
			});
			let {signal} = controller;
			try {
				{
					pendingRef.value = true;
				}
				let value = await fn((onAbort) => {
					signal.addEventListener('abort', onAbort);
				});
				if (!signal.aborted) {
					valueRef.value = value;
				}
			} catch (error) {
				if (!signal.aborted) {
					emit('error', error);
				}
			} finally {
				if (!signal.aborted) {
					pendingRef.value = false;
				}
			}
		});

		// todo: rename
		// todo
		let tbxuyrwrRef = shallowRef(null);

		let value = null;
		// todo
		watchEffect(() => {
			let v = props.modelValue ?? null;
			if (value !== v) {
				value = v;
				gyctthkvRef.value = value;
			}
		});
		watchEffect(() => {
			value = tbxuyrwrRef.value;
			emit('update:modelValue', value);
		});

		// todo: rename
		let kpjtcqrk = () => {
			let input = document.createElement('input');
			input.type = 'file';
			input.accept = 'image/*';
			input.addEventListener('change', () => {
				((files) => {
					for (let file of files) {
						pyjlbndg(file);
					}
				})(input.files!);
			});
			input.click();
		};

		return () => {
			return h('div', 'hello');
		};
	},
	{
		name: 'VImageInput',

		props: {
			modelValue: String,
			width: Number,
			height: Number,
		} as any,

		emits: {
			['update:modelValue']: (v: null | string) => true,
			['error']: (v: unknown) => true, // todo: rename?
			['file']: (v: File) => true, // todo: rename?
		},
	},
);

export default VImageInput;
