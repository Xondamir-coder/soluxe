<template>
	<button class="lang" :aria-label="$t('change-lang')">
		<p v-for="{ name, locale } in langs" :key="locale" @click="toggleLang(locale)">
			{{ name }}
			<span v-if="locale != 'zh'">/</span>
		</p>
	</button>
</template>

<script setup>
import { changeLang } from '@/locales';

const langs = [
	{
		name: 'En',
		locale: 'en'
	},
	{
		name: 'Ru',
		locale: 'ru'
	},
	{
		name: '中文',
		locale: 'zh'
	}
];
const toggleLang = newLocale => changeLang(newLocale);
</script>

<style scoped lang="scss">
.lang {
	font-size: 0.8rem;
	display: flex;
	gap: 6px;
	p {
		transition: color 0.4s;
		display: flex;
		gap: 6px;
	}
	p:hover {
		color: var(--yellow);
	}
}
</style>
