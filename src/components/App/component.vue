<script setup lang="ts">
import {stored} from '@/packages/@seregpie/vue-storage';
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import {VAlert} from 'vuetify/components/VAlert';
import {VApp} from 'vuetify/components/VApp';
import {VAppBar} from 'vuetify/components/VAppBar';
import {VBtn} from 'vuetify/components/VBtn';
import {VCard} from 'vuetify/components/VCard';
import {VIcon} from 'vuetify/components/VIcon';
import {VMain} from 'vuetify/components/VMain';
import {VSlideGroup, VSlideGroupItem} from 'vuetify/components/VSlideGroup';
import {VTextField} from 'vuetify/components/VTextField';

const {t} = useI18n();

const hdalpzqc = ref<string>('sgpyzsuc');

const hcduehqz = ['🐭', '🐮', '🐯', '🐰', '🐱', '🐴', '🐵', '🐶', '🐷', '🐸', '🐹', '🐺', '🐻', '🐼', '🦁', '🦊'];
const sgpyzsuc = stored<Array<string>>(() => `@seregpie/vue-storage:${hdalpzqc.value}`, {
	default: [],
});
const a = stored('');
</script>
<template>
	<VApp>
		<VAppBar
			color="primary"
			dark
			title="VueStorage"
		>
			<template v-slot:append>
				<VBtn
					href="https://github.com/SeregPie/VueStorage"
					icon
					target="_blank"
				>
					<VIcon>mdi-github</VIcon>
				</VBtn>
			</template>
		</VAppBar>
		<VMain class="zaurqxta">
			<div class="nqzthkvt">
				<VAlert type="info">{{ t('tczvgeuh') }}</VAlert>
				<VSlideGroup
					v-model="sgpyzsuc"
					multiple
					show-arrows
				>
					<VSlideGroupItem
						v-for="nurebuou of hcduehqz"
						:key="nurebuou"
						v-slot="{isSelected, toggle}"
					>
						<VCard
							style="margin: 0.25rem"
							:color="isSelected ? 'primary' : 'grey-lighten-1'"
							@click="toggle"
						>
							<div class="vkzsrmkh">{{ nurebuou }}</div>
						</VCard>
					</VSlideGroupItem>
				</VSlideGroup>
				<VTextField
					v-model="hdalpzqc"
					:hint="t('tqgfdiuz')"
					:label="t('lekljpgz')"
					persistent-hint
				/>
			</div>
		</VMain>
	</VApp>
</template>

<style>
.zaurqxta {
	align-items: center;
	display: grid;
	grid-template-columns: minmax(auto, 32rem);
	justify-content: center;
}

.nqzthkvt {
	display: grid;
	gap: 2rem;
}

.vkzsrmkh {
	align-items: center;
	display: flex;
	font-size: 2rem;
	height: 4rem;
	justify-content: center;
	pointer-events: none;
	user-select: none;
	width: 4rem;
}
</style>
