<template>
	<div class="lang">
		<button class="lang__button" :aria-label="$t('change-lang')" @click="toggleLang('en')">
			En
		</button>
		|
		<button class="lang__button" :aria-label="$t('change-lang')" @click="toggleLang('ru')">
			Ru
		</button>
		|
		<button class="lang__button" :aria-label="$t('change-lang')" @click="toggleLang('zh')">
			中文
		</button>
	</div>
</template>

<script setup>
import { changeLang } from '@/locales';
const toggleLang = newLocale => changeLang(newLocale);
</script>

<style scoped lang="scss">
.lang {
	font-size: 0.8rem;
	display: flex;
	gap: 6px;
	&__button {
		transition: color 0.4s;
		display: flex;
		gap: 6px;
		&:hover {
			color: var(--yellow);
		}
	}
}
</style>
