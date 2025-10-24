<script setup lang="ts">
import {LocalScope} from "@allindevelopers/vue-local-scope";
import {computed, reactive, ref} from "vue";
import {VApp} from "vuetify/components/VApp";
import {VAppBar, VAppBarNavIcon} from "vuetify/components/VAppBar";
import {VBtn} from "vuetify/components/VBtn";
import {VCheckbox} from "vuetify/components/VCheckbox";
import {VCol, VContainer, VRow} from "vuetify/components/VGrid";
import {VMain} from "vuetify/components/VMain";
import {VNavigationDrawer} from "vuetify/components/VNavigationDrawer";
import {VNumberInput} from "vuetify/components/VNumberInput";
import {VFileUpload} from "vuetify/labs/VFileUpload";
import {VImageInput} from "../../../core";

// todo
function t(key: string): string {
  return key;
}

const menu = (() => {
  const valueRef = ref<boolean>(false);
  const toggle = () => {
    valueRef.value = !valueRef.value;
  };
  return reactive({
    value: valueRef,
    toggle,
  });
})();

const form = (() => {
  // todo
  const imageWidth = (() => {
    const valueRef = ref<number>(1024);
    const min = 64;
    const max = 1024;
    return reactive({
      label: t("Image width"),
      value: valueRef,
      min,
      max,
    });
  })();
  // todo
  const imageHeight = (() => {
    const value$ = ref<number>(512);
    const min = imageWidth.min;
    const max = imageWidth.max;
    return reactive({
      label: t("Image height"),
      value: value$,
      min,
      max,
    });
  })();
  const disabled = (() => {
    const valueRef = ref<boolean>(false);
    return reactive({
      label: t("Disabled"),
      value: valueRef,
    });
  })();
  const readonly = (() => {
    const valueRef = ref<boolean>(false);
    return reactive({
      label: t("Readonly"),
      value: valueRef,
    });
  })();
  return reactive({
    imageWidth,
    imageHeight,
    disabled,
    readonly,
  });
})();

const test = (() => {
  return reactive({
    props: (() => {
      const imageWidth = computed(() => form.imageWidth.value);
      const imageHeight = computed(() => form.imageHeight.value);
      const disabled = computed(() => form.disabled.value);
      const readonly = computed(() => form.readonly.value);
      return reactive({
        imageWidth,
        imageHeight,
        disabled,
        readonly,
      });
    })(),
  });
})();
</script>
<template>
  <VApp theme="dark">
    <VAppBar
      color="primary"
      title="VuetifyImageInput"
    >
      <template v-slot:prepend>
        <VAppBarNavIcon @click="menu.toggle()" />
      </template>
      <template v-slot:append>
        <VBtn
          href="https://github.com/SeregPie/VuetifyImageInput"
          icon="mdi-github"
          target="_blank"
        />
      </template>
    </VAppBar>
    <VNavigationDrawer v-model="menu.value">
      <VContainer>
        <VRow dense>
          <VCol>
            <LocalScope
              :form="form.imageWidth"
              v-slot="{form}"
            >
              <VNumberInput
                v-model="form.value"
                :label="form.label"
                :min="form.min"
                :max="form.max"
                controlVariant="stacked"
                hide-details
              />
            </LocalScope>
          </VCol>
        </VRow>
        <VRow dense>
          <VCol>
            <LocalScope
              :form="form.imageHeight"
              v-slot="{form}"
            >
              <VNumberInput
                v-model="form.value"
                :label="form.label"
                :min="form.min"
                :max="form.max"
                controlVariant="stacked"
                hide-details
              />
            </LocalScope>
          </VCol>
        </VRow>
        <VRow dense>
          <VCol>
            <LocalScope
              :form="form.disabled"
              v-slot="{form}"
            >
              <VCheckbox
                v-model="form.value"
                :label="form.label"
                hide-details
                style="--v-input-control-height: auto"
              />
            </LocalScope>
          </VCol>
        </VRow>
        <VRow dense>
          <VCol>
            <LocalScope
              :form="form.readonly"
              v-slot="{form}"
            >
              <VCheckbox
                v-model="form.value"
                :label="form.label"
                hide-details
                style="--v-input-control-height: auto"
              />
            </LocalScope>
          </VCol>
        </VRow>
      </VContainer>
    </VNavigationDrawer>
    <VMain>
      <VImageInput />
    </VMain>
  </VApp>
</template>
