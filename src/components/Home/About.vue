<template>
	<section class="about" id="about" ref="aboutRef">
		<div class="about__header">
			<div class="about__header-content" ref="headerContentRef">
				<h6 class="h6 about__header-label">{{ $t('link-about') }}</h6>
				<h1 class="h1 about__title">
					<div class="about__word" v-for="(word, i) in words" :key="i" ref="wordsRef">
						{{ word }}
					</div>
				</h1>
			</div>
			<p class="body-1">{{ $t('about-header-text') }}</p>
		</div>
		<div class="about__bg">
			<img
				class="about__bg-img"
				src="@/images/about-bg.avif"
				alt="bg banner"
				width="1280"
				height="444" />
			<ul class="about__stats" ref="statsListRef">
				<li class="about__stats-item" v-for="{ amount, title } in stats" :key="title">
					<h1 class="h1-big">{{ amount }}</h1>
					<p class="body-1">{{ title }}</p>
				</li>
			</ul>
		</div>
		<div class="about__content">
			<ul class="about__list" ref="listRef">
				<li class="about__item" v-for="{ label, title, text } in items" :key="title">
					<h6 class="cap-1 about__item-label">{{ label }}</h6>
					<h3 class="h3">{{ title }}</h3>
					<p class="body-1">{{ text }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import { i18n } from '@/locales';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
gsap.registerPlugin(ScrollTrigger);

const aboutRef = ref(null);
const statsListRef = ref(null);
const listRef = ref(null);

let timeline;

const animateElements = () => {
	if (timeline) {
		// timeline.scrollTrigger.kill(); // Kill the ScrollTrigger
		timeline.kill(); // Kill the previous timeline
	}

	// Define the new timeline and animations
	timeline = gsap.timeline({
		scrollTrigger: {
			trigger: aboutRef.value,
			scrub: 1,
			start: 'top bottom',
			end: 'bottom bottom'
		}
	});

	// Define the animation sequence using refs
	timeline
		.from('.about__header-content', {
			duration: 0.6,
			scaleY: 0
		})
		.from('.about__word', {
			y: 30,
			opacity: 0,
			stagger: 0.04
		})
		.from(statsListRef.value.children, {
			transformOrigin: 'top left',
			scale: 0,
			opacity: 0,
			stagger: 0.2
		})
		.from(listRef.value.children, {
			scale: 1.3,
			opacity: 0,
			stagger: 0.2
		});
};

watch(
	() => i18n.global.locale,
	async () => {
		await nextTick();
		animateElements();
	}
);
onMounted(animateElements);

const words = computed(() => {
	const title = i18n.global.t('about-header-title');
	return title.split(/(\s+)/).map(word => (word === ' ' ? '\u00A0' : word)); // Replace spaces with non-breaking spaces
});

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

	&__title {
		display: flex;
		flex-wrap: wrap;
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
		overflow: hidden;
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
		gap: 10px;
		@media screen and (max-width: 768px) {
			margin-left: 0;
			max-width: 100%;
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
		&-img {
			width: 100%;
			height: auto;
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
			transform-origin: top;
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
