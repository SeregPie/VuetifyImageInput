import {computed, defineComponent, h, watch, watchEffect} from 'vue';
import {VBtn, VSlider} from 'vuetify/components';

import ibaxrrrq from 'cybele/ibaxrrrq';
import pmyivsgp from 'cybele/pmyivsgp';
import {sindmyaj} from 'vuse';

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
		let {
			result: imageRef,
			pending: imageLoadingRef,
			ghghgh,
			clear,
		} = sindmyaj<HTMLImageElement>();
		let mnxgfqpx = async (src: unknown) => {
			try {
				await ghghgh((signal) => pmyivsgp(src, {signal}));
			} catch (error) {
				emit('error', error);
			}
		};

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
				if (value == null) {
					clear();
				} else {
					mnxgfqpx(value);
				}
			}
		});
		watchEffect((onCleanup) => {
			// todo?
			// todo: transform
			let image = imageRef.value;
			let timerId = setTimeout(() => {
				value = image != null ? gangayjy(image) : null;
				emit('update:modelValue', value);
			}, 2000);
			onCleanup(() => {
				clearTimeout(timerId);
			});
		});

		// todo: rename?
		let openFile = () => {
			ibaxrrrq(
				(files) => {
					for (let file of files) {
						emit('file', file);
						mnxgfqpx(file);
					}
				},
				{
					accept: 'image/*',
				},
			);
		};

		expose({
			openFile,
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
							h(
								//
								'img',
								{
									style: {
										position: 'absolute',
									},
									src: imageRef.value?.src ?? null,
								},
							),
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
										openFile();
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
