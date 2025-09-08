// @ts-nocheck

import {defineComponent, h, shallowRef, watchEffect} from "vue";
import {VBtn, VFadeTransition, VProgressCircular} from "vuetify/components";

const {AbortController, Blob, document, Image, Promise, URL} = globalThis;

function ibaxrrrq(
  handle: {(files: FileList): void},
  options?: Partial<{
    accept: string;
    multiple: boolean;
  }>,
): void;

function ibaxrrrq(handle, {
  accept = "",
  multiple = false,
} = {}) {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = accept;
  input.multiple = multiple;
  input.addEventListener("change", () => {
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

async function loadImage(source) {
  let fromImage = async (image) => {
    const canvas = document.createElement("canvas");
    try {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      canvas.getContext("2d").drawImage(image, 0, 0);
      return {
        width: canvas.width,
        height: canvas.height,
        url: canvas.toDataURL(),
      };
    } finally {
      canvas.remove();
    }
  };
  let fromUrl = async (url) => {
    let image = document.createElement("img");
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
    let nojjmbizRef = shallowRef(null); // input
    let qzqlcmwy = nojjmbizRef.value; // output
    let tqnrivmcRef = shallowRef(null); // image
    let loadingRef = shallowRef(false);

    watchEffect(() => {
      let qiomvhbg = props.modelValue ?? null;
      if (qiomvhbg !== qzqlcmwy) {
        console.log("AAA");
        nojjmbizRef.value = qiomvhbg;
      }
    });

    watchEffect(() => {
      let tqnrivmc = tqnrivmcRef.value;
      if (tqnrivmc != null) {
        console.log("BBB");
        qzqlcmwy = tqnrivmc.url;
        emit("update:modelValue", qzqlcmwy);
      }
    });

    watchEffect(async (onCleanup) => {
      let nojjmbiz = nojjmbizRef.value;
      if (nojjmbiz == null) {
        tqnrivmcRef.value = null;
      } else {
        let signal = toAbortSignal(onCleanup);
        try {
          {
            loadingRef.value = true;
          }
          tqnrivmcRef.value = await (async () => {
            let ggg = delay(400);
            try {
              return await loadImage(nojjmbiz);
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
      nojjmbizRef.value = null;
    };

    let pyjlbndg = (file) => {
      console.log("uploaded", file);
      nojjmbizRef.value = file;
    };

    return () => {
      return h(VFadeTransition, {
        mode: "out-in",
      }, () => {
        let loading = loadingRef.value;
        if (loading) {
          return h(VProgressCircular, {
            key: 0,
            indeterminate: true,
          });
        }
        let tqnrivmc = tqnrivmcRef.value;
        if (tqnrivmc == null) {
          return h("div", {
            key: 1,
            style: {
              backgroundColor: "CadetBlue",
              blockSize: "128px",
              cursor: "pointer",
              display: "relative",
              inlineSize: "128px",
            },
            onClick: () => {
              ibaxrrrq((files) => {
                for (let file of files) {
                  pyjlbndg(file);
                }
              }, {
                accept: "image/*",
              });
            },
          });
        }
        return h("div", {
          key: 2,
          style: {
            display: "grid",
            blockSize: "256px",
            inlineSize: "256px",
          },
        }, [
          h(VBtn, {
            onClick: clear,
          }, () => "Clear"),
          h("img", {
            src: tqnrivmc.url,
            style: {
              inlineSize: "100%",
              blockSize: "auto",
            },
          }),
        ]);
      });
    };
  },

  name: "VImageInput",

  props: {
    modelValue: [null, String],
    imageWidth: Number,
    imageHeight: Number,
    readonly: Boolean,
    disabled: Boolean,
  },

  emits: {
    ["update:modelValue"]: (v: null | string) => true,
    ["error"]: (v: unknown) => true, // todo: rename?
    ["file"]: (v: File) => true, // todo: rename?
  },
});
