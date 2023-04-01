<script setup lang="ts">
import VImageInput from '@/packages/vuetify-image-input';
import {computed, ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {useTheme} from 'vuetify';
import {VAlert} from 'vuetify/components/VAlert';
import {VApp} from 'vuetify/components/VApp';
import {VAppBar, VAppBarNavIcon} from 'vuetify/components/VAppBar';
import {VBtn} from 'vuetify/components/VBtn';
import {VCard} from 'vuetify/components/VCard';
import {VNavigationDrawer} from 'vuetify/components/VNavigationDrawer';
import {VMain} from 'vuetify/components/VMain';
import {VSlideGroup, VSlideGroupItem} from 'vuetify/components/VSlideGroup';
import {VTextField} from 'vuetify/components/VTextField';
import {VCheckbox} from 'vuetify/components/VCheckbox';

const {t} = useI18n();

const drawer = ref<boolean>(true);
const toggleDrawer = (): void => {
	drawer.value = !drawer.value;
};

const theme = useTheme();
const toggleTheme = (): void => {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const showLabel = ref<boolean>(true);
const label = computed<undefined | string>(() => {
	if (showLabel.value) {
		return 'Some label';
	}
});
const showMessages = ref<boolean>(true);
const messages = computed<undefined | string>(() => {
	if (showMessages.value) {
		return 'Some messages';
	}
});
const hideDetails = ref<boolean>(false);
const disabled = ref<boolean>(false);
const readonly = ref<boolean>(false);
</script>
<template>
	<VApp>
		<VAppBar
			color="primary"
			title="VuetifyImageInput"
		>
			<template v-slot:prepend>
				<VAppBarNavIcon @click="toggleDrawer()" />
			</template>
			<template v-slot:append>
				<VBtn
					icon="mdi-invert-colors"
					@click="toggleTheme()"
				/>
				<VBtn
					href="https://github.com/SeregPie/VuetifyImageInput"
					icon="mdi-github"
					target="_blank"
				/>
			</template>
		</VAppBar>
		<VNavigationDrawer v-model="drawer">
			<div :class="$style.labhvouu">
				<VTextField
					hide-details="auto"
					label="Label"
				/>
				<VCheckbox
					v-model="showLabel"
					hide-details="auto"
					label="Show label"
				/>
				<VCheckbox
					v-model="showMessages"
					hide-details="auto"
					label="Show messages"
				/>
				<VCheckbox
					v-model="hideDetails"
					hide-details="auto"
					label="Hide details"
				/>
				<VCheckbox
					v-model="disabled"
					hide-details="auto"
					label="Disabled"
				/>
				<VCheckbox
					v-model="readonly"
					hide-details="auto"
					label="Readonly"
				/>
			</div>
		</VNavigationDrawer>
		<VMain :class="$style.zaurqxta">
			<VImageInput
				:disabled="disabled"
				:hide-details="hideDetails"
				:label="label"
				:messages="messages"
				:readonly="readonly"
			/>
		</VMain>
	</VApp>
</template>

<style module>
/* todo: rename */
.zaurqxta {
	align-items: center;
	display: flex;
	justify-content: center;
}

/* todo: rename */
.labhvouu {
	display: grid;
	gap: 1rem;
	padding: 1rem;
}
</style>
