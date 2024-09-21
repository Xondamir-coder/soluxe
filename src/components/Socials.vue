<template>
	<ul class="socials">
		<li class="social" v-for="{ icon, name } in icons" :key="icon">
			<a href="#" target="_blank" :aria-label="name">
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

const icons = [
	{ name: 'Facebook', icon: Facebook },
	{ name: 'Twitter', icon: Twitter },
	{ name: 'Instagram', icon: Instagram },
	{ name: 'Linkedin', icon: Linkedin }
];
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
