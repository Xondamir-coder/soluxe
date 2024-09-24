<template>
	<section class="team" id="team" ref="teamRef">
		<h2 class="team__title h2" ref="titleRef">{{ $t('team-title') }}</h2>
		<ul class="team__list">
			<li
				class="team__item"
				v-for="{ name, job, img } in employees"
				:key="name"
				ref="teamItems">
				<img class="team__img" :src="img" :alt="name" />
				<h3 class="h3">{{ name }}</h3>
				<p class="body-2">{{ job }}</p>
				<Socials class="fill-black" />
			</li>
		</ul>
	</section>
</template>

<script setup>
import { i18n } from '@/locales';
import { computed, nextTick, onMounted, watch, ref } from 'vue';
import person1Img from '@/images/person-1.webp';
import person2Img from '@/images/person-2.webp';
import person3Img from '@/images/person-3.webp';
import person4Img from '@/images/person-4.webp';
import Socials from '../Socials.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const teamRef = ref();
const titleRef = ref();
const teamItems = ref([]);

const animations = [];

const animateCards = () => {
	if (animations.length) {
		animations.forEach(anim => {
			if (anim.scrollTrigger) {
				anim.scrollTrigger.kill(); // Kill the ScrollTrigger
			}
			anim.kill(); // Kill the GSAP animation
		});
		animations.length = 0;
	}

	teamItems.value.forEach((el, index) => {
		const anim = gsap.from(el.children, {
			opacity: 0,
			filter: 'blur(10px)',
			y: 20,
			stagger: 0.2,
			scrollTrigger: {
				trigger: el,
				start: 'top bottom',
				end: 'bottom 70%',
				scrub: 1
			}
		});
		animations.push(anim);
	});
};
const animateElements = () => {
	gsap.from(titleRef.value, {
		opacity: 0,
		filter: 'blur(10px)',
		y: -30,
		scrollTrigger: {
			trigger: titleRef.value,
			start: 'top center',
			end: 'bottom+=50 center',
			scrub: 1
		}
	});
};

onMounted(() => {
	animateElements();
	animateCards();
});

watch(
	() => i18n.global.locale,
	async () => {
		await nextTick();
		animateCards();
	}
);

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
