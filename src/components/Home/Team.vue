<template>
	<section class="team" id="team">
		<h2 class="team__title h2">{{ $t('team-title') }}</h2>
		<ul class="team__list">
			<li class="team__item" v-for="{ name, job, img } in employees" :key="name">
				<img loading="lazy" class="team__img" :src="img" :alt="name" />
				<h3 class="h3">{{ name }}</h3>
				<p class="body-2">{{ job }}</p>
				<Socials class="fill-black" />
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.fill-black {
	color: var(--black);
}
.team {
	display: flex;
	flex-direction: column;
	gap: 48px;
	text-align: center;
	margin-top: 7rem;
	&__img {
		object-fit: contain;
		margin-bottom: 1rem;
		width: 60%;
		height: 60%;
		align-self: center;
	}
	&__list {
		display: grid;
		column-gap: 1.6rem;
		row-gap: 3.2rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
	&__item {
		background-color: var(--light-grey);
		display: flex;
		flex-direction: column;
		padding: 2rem 1.4rem;
		transition: background-color 0.3s;
		@media only screen and (max-width: 768px) {
			gap: 10px;
		}
		&:hover {
			background-color: var(--light-yellow);
		}
	}
	&__title {
		color: var(--yellow);
	}
}
</style>

<script setup>
import { i18n } from '@/locales';
import { computed } from 'vue';

import person1Img from '@/images/person-1.webp';
import person2Img from '@/images/person-2.webp';
import person3Img from '@/images/person-3.webp';
import person4Img from '@/images/person-4.webp';
import Socials from '../Socials.vue';

const employees = computed(() => [
	{
		name: i18n.global.t('team-name-1'),
		job: i18n.global.t('team-job-1'),
		img: person1Img
	},
	{
		name: i18n.global.t('team-name-2'),
		job: i18n.global.t('team-job-2'),
		img: person2Img
	},
	{
		name: i18n.global.t('team-name-3'),
		job: i18n.global.t('team-job-3'),
		img: person3Img
	},
	{
		name: i18n.global.t('team-name-4'),
		job: i18n.global.t('team-job-4'),
		img: person4Img
	}
]);
</script>
