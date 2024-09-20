<template>
	<nav class="nav">
		<ul class="list body-1">
			<li class="item" v-for="{ name, to } in links" :key="name">
				<a class="link" :href="to.replace('/', '#')">{{ name }}</a>
			</li>
			<li class="item" v-if="isFooter">
				<RouterLink class="link" to="/policy">{{ $t('link-policy') }}</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.list {
	list-style: none;
	display: flex;
	gap: 1.2rem;
}
.link {
	font-family: var(--font-inter);
	color: #fff;
	transition: color 0.4s, text-shadow 0.4s;
	&:hover {
		color: var(--yellow);
		text-shadow: 0 0 20px var(--yellow), 0 0 10px var(--yellow);
	}
}
</style>

<script setup>
import { i18n } from '@/locales';
import { computed } from 'vue';

const props = defineProps({
	isFooter: Boolean
});

const linkArr = [
	{ name: 'link-home', to: '/' },
	{ name: 'link-about', to: '/about' },
	{ name: 'link-team', to: '/team' },
	{ name: 'link-services', to: '/services' },
	{ name: 'link-work', to: '/work' },
	{ name: 'link-contact', to: '/contact' }
];

const links = computed(() =>
	linkArr.map(link => ({
		...link,
		name: i18n.global.t(link.name)
	}))
);
</script>
