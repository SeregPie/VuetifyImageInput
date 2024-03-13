<script setup lang="ts">
import {shallowRef} from 'vue';
import VImageInput from 'vuetify-image-input';

let image = shallowRef<string>();
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
