<template>
	<header class="header">
		<button>
			<Logo />
		</button>
		<LinkList class="links" />
		<button class="lang" @click="toggleLang">
			<p>
				{{ $i18n.locale }} /
				{{ $i18n.availableLocales.find(locale => locale !== $i18n.locale).toUpperCase() }}
			</p>
		</button>
		<button class="button cta">
			{{ $t('call-us') }}
		</button>
	</header>
</template>

<style lang="scss" scoped>
.links {
	margin: 0 auto;
	transform: translateX(3rem);
}
.cta {
	color: #fff;
	transition: color 0.3s, background-color 0.3s;
	&:hover {
		color: #000;
	}
}
.lang {
	font-size: 0.8rem;
	margin-right: 3.75rem;
	transition: color 0.4s;
	p::first-letter {
		text-transform: uppercase;
	}
	&:hover {
		color: var(--yellow);
	}
}
.header {
	background-color: #000;
	color: #fff;
	padding: 12px 3rem;
	display: flex;
	// justify-content: space-between;
	align-items: center;
}
</style>

<script setup>
import { changeLang, i18n } from '@/locales';
import Logo from './Icons/Logo.vue';
import LinkList from './LinkList.vue';

const toggleLang = () => {
	changeLang(i18n.global.locale == 'en' ? 'ru' : 'en');
};
</script>
