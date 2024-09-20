<template>
	<section class="about" id="about">
		<div class="about__header">
			<div class="about__header-content">
				<h6 class="h6 about__header-label">{{ $t('link-about') }}</h6>
				<h1 class="h1">{{ $t('about-header-title') }}</h1>
			</div>
			<p class="body-1">
				{{ $t('about-header-text') }}
			</p>
		</div>
		<div class="about__bg">
			<img src="@/images/about-bg.jpg" alt="bg banner" />
			<ul class="about__stats">
				<li class="about__stats-item" v-for="{ amount, title } in stats" :key="title">
					<h1 class="h1-big">{{ amount }}</h1>
					<p class="body-1">{{ title }}</p>
				</li>
			</ul>
		</div>
		<div class="about__content">
			<ul class="about__list">
				<li class="about__item" v-for="{ label, title, text } in items" :key="title">
					<h6 class="cap-1 about__item-label">{{ label }}</h6>
					<h3 class="h3">{{ title }}</h3>
					<p class="body-1">{{ text }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#about {
	@media only screen and (max-width: 500px) {
		padding: 0;
	}
}
.about {
	color: #fff;
	display: flex;
	flex-direction: column;
	& > * {
		grid-column: 1/-1;
	}

	&__item {
		display: flex;
		flex-direction: column;
		gap: 20px;
		&-label {
			text-transform: uppercase;
		}
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		column-gap: 2rem;
		row-gap: 6.2rem;
	}
	&__content {
		background-color: var(--green);
		padding: 6.4rem clamp(2.4rem, 5vw, 6.4rem);
		padding-bottom: 3.2rem;
	}
	&__stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
		background-color: var(--yellow);
		color: #fff;
		width: 100%;
		max-width: 33rem;
		padding: 1.6rem 2.4rem;
		align-self: end;
		margin-left: 10%;
		@media screen and (max-width: 768px) {
			margin-left: 0;
			max-width: 100%;
			gap: 10px;
		}
		h1 {
			text-transform: uppercase;
		}
	}
	&__bg {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
			@media screen and (max-width: 768px) {
				grid-area: auto;
			}
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__header {
		transform: translateY(3.5rem);
		z-index: 10;
		margin: 0 auto;
		max-width: 90%;
		gap: 1.6rem;
		align-items: center;
		color: var(--yellow);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

		@media only screen and (max-width: 800px) {
			max-width: 100%;
			transform: translateY(0);
			margin: 10rem 20px;
			gap: 30px;
		}

		&-label {
			font-family: var(--font-inter);
			letter-spacing: 3px;
			text-transform: uppercase;
			font-weight: 400;
		}
		&-content {
			background-color: rgba(212, 187, 138, 0.7);
			backdrop-filter: blur(6px);
			color: #fff;
			padding: 2.5rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
}
</style>

<script setup>
import { i18n } from '@/locales';
import { computed } from 'vue';

const stats = computed(() => [
	{
		amount: '12+',
		title: i18n.global.t('about-exp')
	},
	{
		amount: `18${i18n.global.t('k')}+`,
		title: i18n.global.t('about-attendees')
	},
	{
		amount: `30${i18n.global.t('k')}+`,
		title: i18n.global.t('about-events')
	}
]);
const items = computed(() => [
	{
		label: i18n.global.t('about-mission-label'),
		title: i18n.global.t('about-mission-title'),
		text: i18n.global.t('about-mission-text')
	},
	{
		label: i18n.global.t('about-vision-label'),
		title: i18n.global.t('about-vision-title'),
		text: i18n.global.t('about-vision-text')
	}
]);
</script>
