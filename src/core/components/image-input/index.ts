import {
	computed,
	defineComponent,
	h,
	shallowRef,
	watch,
	watchEffect,
} from 'vue';
import {VBtn, VSlider} from 'vuetify/components';

import {ibaxrrrq} from '../../packages/pony';
import {computedAsync} from '../../packages/vue';

let {AbortController, Blob, FileReader, URL, document} = globalThis;

export default defineComponent({
	name: 'VImageInput',

	components: {
		VBtn,
		VSlider,
	},

	props: {
		modelValue: String,
		width: Number,
		height: Number,
	},

	emits: {
		['update:modelValue']: (v: null | string) => true,
		['error']: (v: unknown) => true, // todo: rename?
		['file']: (v: File) => true, // todo: rename?
	},

	setup(props, {slots, emit, expose}) {
		let gyctthkvRef = shallowRef<unknown>(null);

		let clear = () => {
			gyctthkvRef.value = null;
		};

		let imageRef = computedAsync(
			async (onAbort) => {
				let src = gyctthkvRef.value;
				if (src == null) {
					return null;
				}
				let controller = new AbortController();
				onAbort(() => {
					controller.abort();
				});
				let {signal} = controller;
				return await pmyivsgp(src, {signal});
			},
			{
				initial: null,
				onError(error) {
					emit('error', error);
				},
			},
		);

		let rotate = (n: number) => {
			// todo
		};

		// todo: rename
		let xsblcabf = 90;

		let flip = (x: boolean, y: boolean) => {
			// todo
		};

		let move = (x: number, y: number) => {
			// todo
		};

		// todo: scale/zoom

		let reset = () => {
			// todo
		};

		watch(imageRef, () => {
			reset();
		});

		let kyshwniaRef = computed(() => {
			let image = imageRef.value;
			return image != null ? gangayjy(image) : null;
		});

		let gangayjy = (image: HTMLImageElement) => {
			let canvas = document.createElement('canvas');
			canvas.width = 256;
			canvas.height = 32;
			let ctx = canvas.getContext('2d')!;
			ctx.drawImage(image, 0, 0);
			return canvas.toDataURL();
		};

		let valueRef = computed(() => props.modelValue ?? null);
		let value = valueRef.value;
		watch(valueRef, (v) => {
			// todo?
			if (value !== v) {
				value = v;
				gyctthkvRef.value = value;
			}
		});
		watchEffect((onCleanup) => {
			// todo?
			// todo: transform
			let image = imageRef.value;
			value = image != null ? gangayjy(image) : null;
			emit('update:modelValue', value);
		});

		// todo: rename
		let pyjlbndg = (file: File) => {
			emit('file', file);
			gyctthkvRef.value = file;
		};

		// todo: rename
		let kpjtcqrk = () => {
			ibaxrrrq(
				(files) => {
					for (let file of files) {
						pyjlbndg(file);
					}
				},
				{
					accept: 'image/*',
				},
			);
		};

		expose({
			ibaxrrrq: kpjtcqrk,
			move,
			rotate,
			flip,
			reset,
			clear,
		});

		//let VBtn = resolveComponent('VBtn');
		//let VSlider = resolveComponent('VSlider');

		return () => {
			return h(
				//
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'row',
					},
				},
				[
					h(
						//
						'div',
						{
							style: {
								position: 'relative',
								flexGrow: 1,
								backgroundColor: 'Coral',
							},
						},
						[
							(() => {
								let image = imageRef.value;
								if (image == null) {
									let loading = imageLoadingRef.value;
									if (loading) {
										console.log('return loading');
										return h('span', 'loading');
									}
									console.log('return empty');
									return h('span', 'empty');
								}
								console.log('return image');
								return h(
									//
									'img',
									{
										style: {
											position: 'absolute',
										},
										src: image.src,
									},
								);
							})(),
						],
					),
					h(
						//
						'div',
						{
							style: {
								display: 'flex',
								flexDirection: 'column',
								gap: `${1}rem`,
							},
						},
						[
							h(
								VBtn,
								{
									onClick() {
										kpjtcqrk();
									},
								},
								() => 'Load',
							),
							h(
								VBtn,
								{
									onClick() {
										clear();
									},
								},
								() => 'Clear',
							),
							h(
								VBtn,
								{
									onClick() {
										move(+10, 0);
									},
								},
								() => 'Move right',
							),
							h(
								VBtn,
								{
									onClick() {
										move(-10, 0);
									},
								},
								() => 'Move left',
							),
							h(
								VBtn,
								{
									onClick() {
										move(0, +10);
									},
								},
								() => 'Move down',
							),
							h(
								VBtn,
								{
									onClick() {
										move(0, -10);
									},
								},
								() => 'Move up',
							),
							h(
								VBtn,
								{
									onClick() {
										let n = xsblcabf;
										rotate(+n);
									},
								},
								() => 'Rotate clockwise',
							),
							h(
								VBtn,
								{
									onClick() {
										let n = xsblcabf;
										rotate(-n);
									},
								},
								() => 'Rotate counter-clockwise',
							),
							h(
								VBtn,
								{
									onClick() {
										flip(true, false);
									},
								},
								() => 'Flip horizontally',
							),
							h(
								VBtn,
								{
									onClick() {
										flip(false, true);
									},
								},
								() => 'Flip vertically',
							),
							h(VSlider, {
								prependIcon: 'mdi-magnify-minus-outline',
								appendIcon: 'mdi-magnify-plus-outline',
								hideDetails: true,
								//modelValue,
								min: 0,
								max: 100,
								['onUpdate:modelValue'](value) {
									// todo
								},
								['onClick:prepend']() {
									// todo
								},
								['onClick:append']() {
									// todo
								},
							}),
						],
					),
				],
			);
		};
	},
});
