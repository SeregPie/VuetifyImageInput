<script setup lang="ts">
import {LocalScope} from '@allindevelopers/vue-local-scope';
import {computed, reactive, ref} from 'vue';
import {VApp} from 'vuetify/components/VApp';
import {VAppBar, VAppBarNavIcon} from 'vuetify/components/VAppBar';
import {VBtn} from 'vuetify/components/VBtn';
import {VCheckbox} from 'vuetify/components/VCheckbox';
import {VCol, VContainer, VRow} from 'vuetify/components/VGrid';
import {VMain} from 'vuetify/components/VMain';
import {VNavigationDrawer} from 'vuetify/components/VNavigationDrawer';
import {VNumberInput} from 'vuetify/labs/VNumberInput';

import {VImageInput} from '../../packages/vuetify-image-input';

// todo
function t(key: string): string {
	return key;
}

const menu = (() => {
	const value$ = ref<boolean>(true);
	const toggle = () => {
		value$.value = !value$.value;
	};
	return reactive({
		value: value$,
		toggle,
	});
})();

const form = (() => {
	// todo
	const imageWidth = (() => {
		const value$ = ref<number>(1024);
		const min = 64;
		const max = 1024;
		return reactive({
			label: t('Image width'),
			value: value$,
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
			label: t('Image height'),
			value: value$,
			min,
			max,
		});
	})();
	const disabled = (() => {
		const value$ = ref<boolean>(false);
		return reactive({
			label: t('Disabled'),
			value: value$,
		});
	})();
	const readonly = (() => {
		const value$ = ref<boolean>(false);
		return reactive({
			label: t('Readonly'),
			value: value$,
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
	<VApp>
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
								:max="form.max"
								:min="form.min"
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
								:max="form.max"
								:min="form.min"
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
			<VImageInput v-bind="test.props" />
		</VMain>
	</VApp>
</template>
