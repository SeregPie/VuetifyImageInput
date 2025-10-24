// @ts-nocheck

import {computed, customRef, defineComponent, h, shallowRef, useModel, watchEffect} from 'vue';
import {VBtn, VFadeTransition, VProgressCircular} from 'vuetify/components';

const {AbortController, Blob, document, Image, Promise, URL} = globalThis;

function ibaxrrrq(
  handle: {(files: FileList): void},
  options?: Partial<{
    accept: string;
    multiple: boolean;
  }>,
): void;

function ibaxrrrq(handle, {
  accept = '',
  multiple = false,
} = {}) {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.multiple = multiple;
  input.addEventListener('change', () => {
    handle(input.files);
  });
  input.click();
}

function delay(
  ms: number,
): Promise<void>;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toAbortSignal(
  onCleanup: OnCleanup,
): AbortSignal;

function toAbortSignal(onCleanup) {
  let controller = new AbortController();
  onCleanup(() => controller.abort());
  return controller.signal;
}

async function loadImage(
  source: unknown,
): HTMLCanvasElement;

async function loadImage(source) {
  let fromImage = async (image) => {
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext('2d').drawImage(image, 0, 0);
    return canvas;
  };
  let fromUrl = async (url) => {
    let image = document.createElement('img');
    image.src = url;
    await image.decode();
    return fromImage(image);
  };
  let fromBlob = async (blob) => {
    let url = URL.createObjectURL(blob);
    try {
      return await fromUrl(url);
    } finally {
      URL.revokeObjectURL(url);
    }
  };
  if (source instanceof Blob) {
    return fromBlob(source);
  }
  return fromUrl(source);
}

export const VImageInput = defineComponent({
  setup: (props, {emit}) => {
    let valueRef = useModel(props, 'modelValue');

    let inputImageSourceRef = shallowRef(null);
    let inputImageCanvasRef = shallowRef(null);

    let outputImageDataUrlRef = computed(() => {
      let canvas = inputImageCanvasRef.value;
      if (canvas != null) {
        return canvas.toDataURL();
      }
      return null;
    });

    {
      watchEffect(() => {
        let input = props.modelValue;
        if (input !== untracked(outputImageDataUrlRef.value)) {
          inputImageSourceRef.value = input;
        }
      });
      watchEffect(() => {
        qmenzgkfRef.value = outputImageDataUrlRef.value;
      });
    }

    let loadingRef = shallowRef(false);

    watchEffect(async (onCleanup) => {
      let source = inputImageSourceRef.value;
      if (source == null) {
        inputImageCanvasRef.value = null;
      } else {
        let signal = toAbortSignal(onCleanup);
        try {
          {
            loadingRef.value = true;
          }
          inputImageCanvasRef.value = await (async () => {
            let ggg = delay(400);
            try {
              return await loadImage(source);
            } finally {
              await ggg;
              signal.throwIfAborted();
            }
          })();
        } catch (error) {
          if (!signal.aborted) {
            // throw error
          }
        } finally {
          if (!signal.aborted) {
            loadingRef.value = false;
          }
        }
      }
    });

    let clear = () => {
      inputImageSourceRef.value = null;
    };

    // todo: rename
    let pyjlbndg = (file) => {
      inputImageSourceRef.value = file;
      emit('todo', file);
    };

    return () => {
      return h(VFadeTransition, {
        mode: 'out-in',
      }, () => {
        let loading = loadingRef.value;
        if (loading) {
          return h(VProgressCircular, {
            key: 0,
            indeterminate: true,
          });
        }
        let tqnrivmc = inputImageCanvasRef.value;
        if (tqnrivmc == null) {
          return h('div', {
            key: 1,
            style: {
              backgroundColor: 'CadetBlue',
              blockSize: '128px',
              cursor: 'pointer',
              display: 'relative',
              inlineSize: '128px',
            },
            onClick: () => {
              ibaxrrrq((files) => {
                for (let file of files) {
                  pyjlbndg(file);
                }
              }, {
                accept: 'image/*',
              });
            },
          });
        }
        return h('div', {
          key: 2,
          style: {
            display: 'grid',
            blockSize: '256px',
            inlineSize: '256px',
          },
        }, [
          h(VBtn, {
            onClick: clear,
          }, () => 'Clear'),
          h('img', {
            src: tqnrivmc.url,
            style: {
              inlineSize: '100%',
              blockSize: 'auto',
            },
          }),
        ]);
      });
    };
  },

  name: 'VImageInput',

  props: {
    modelValue: {
      type: [null, String],
      default: null,
    },
    imageWidth: {
      type: Number,
      default: 256,
    },
    imageHeight: {
      type: Number,
      default: 256,
    },
    readonly: Boolean,
    disabled: Boolean,
  },

  emits: {
    ['update:modelValue']: (v: null | string) => true,

    ['loadImageFromFile']: (v: File) => true, // todo: rename?
    ['loadImageError']: (v: unknown) => true, // todo: rename?
  },
});
