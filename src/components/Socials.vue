<template>
	<ul class="socials">
		<li class="social" v-for="icon in icons" :key="icon">
			<a href="#" target="_blank">
				<component :is="icon" class="socials__icon" />
			</a>
		</li>
	</ul>
</template>

<script setup>
import Facebook from './Icons/Facebook.vue';
import Twitter from './Icons/Twitter.vue';
import Instagram from './Icons/Instagram.vue';
import Linkedin from './Icons/Linkedin.vue';

const icons = [Facebook, Twitter, Instagram, Linkedin];
</script>

<style scoped lang="scss">
.socials {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-top: 1rem;
	&__icon {
		transition: fill 0.3s;
		fill: currentColor;
		&:hover {
			fill: var(--yellow);
		}
	}
}
.social a {
	display: flex;
	align-items: center;
}
</style>
