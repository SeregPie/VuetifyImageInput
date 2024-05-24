<script setup lang="ts">
import {ref} from 'vue';
import VImageInput from 'vuetify-image-input';

let image = ref<string>();
</script>

<template>
	<div>
		<img :src="image" />
		<VImageInput
			v-model="image"
			:width="96"
			:height="128"
		/>
	</div>
</template>
