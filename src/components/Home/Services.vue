<template>
	<section class="services" id="services" ref="servicesRef">
		<h2 class="services__title h2">{{ $t('services-title') }}</h2>
		<ul class="services__list">
			<li
				class="services__item"
				v-for="(service, index) in services"
				:key="service.title"
				ref="serviceItems">
				<div class="services__icon-container">
					<component :is="service.icon" class="services__icon" />
				</div>
				<h3 class="h3">{{ service.title }}</h3>
				<p class="body-1">{{ service.text }}</p>
			</li>
		</ul>
	</section>
</template>

<script setup>
import { computed, nextTick, onMounted, watch, ref } from 'vue';
import Corporate from '../Icons/Corporate.vue';
import Cyborg from '../Icons/Cyborg.vue';
import Shuttle from '../Icons/Shuttle.vue';
import Trade from '../Icons/Trade.vue';
import { i18n } from '@/locales';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const servicesRef = ref(null);
const serviceItems = ref([]);

const anims = [];
const animateCards = () => {
	if (anims.length) {
		anims.forEach(anim => {
			if (anim.scrollTrigger) {
				anim.scrollTrigger.kill(); // Kill the ScrollTrigger
			}
			anim.kill(); // Kill the GSAP animation
		});
		anims.length = 0;
	}
	serviceItems.value.forEach(el => {
		const anim = gsap.from(el.children, {
			x: 20,
			y: -20,
			opacity: 0,
			stagger: 0.2,
			scrollTrigger: {
				trigger: el,
				start: 'top-=300 center',
				end: 'bottom+=50 center',
				scrub: 1
			}
		});
		anims.push(anim);
	});
};

const animateElements = () => {
	gsap.from('.services__title', {
		opacity: 0,
		filter: 'blur(10px)',
		y: -30,
		scrollTrigger: {
			trigger: '.services__title',
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

const services = computed(() => [
	{
		icon: Corporate,
		title: i18n.global.t('service-title-1'),
		text: i18n.global.t('service-text-1')
	},
	{
		icon: Shuttle,
		title: i18n.global.t('service-title-2'),
		text: i18n.global.t('service-text-2')
	},
	{
		icon: Trade,
		title: i18n.global.t('service-title-3'),
		text: i18n.global.t('service-text-3')
	},
	{
		icon: Cyborg,
		title: i18n.global.t('service-title-4'),
		text: i18n.global.t('service-text-4')
	},
	{
		icon: Cyborg,
		title: i18n.global.t('service-title-5'),
		text: i18n.global.t('service-text-5')
	},
	{
		icon: Cyborg,
		title: i18n.global.t('service-title-6'),
		text: i18n.global.t('service-text-6')
	}
]);
</script>

<style scoped lang="scss">
.services {
	display: flex;
	flex-direction: column;
	margin-top: 3.3rem;
	gap: 60px;
	&__title {
		color: var(--yellow);
		text-align: center;
	}
	&__item {
		padding: 1.6rem 2.2rem;
		display: flex;
		flex-direction: column;
		gap: 14px;
		border: 1px solid rgba(109, 110, 118, 0.3);
		transition: background-color 0.3s;
		&:hover {
			background-color: var(--yellow);
			.h3 {
				color: #fff;
			}
			.body-1 {
				color: var(--light-grey);
			}
		}
	}
	&__list {
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(auto-fit, minmax(max(250px, 18rem), 1fr));
	}
	&__icon {
		&-container {
			background-color: var(--light-yellow);
			width: 48px;
			height: 48px;
			display: grid;
			place-items: center;
			border-radius: 10px;
		}
	}
	.h3 {
		color: var(--black);
		transition: color 0.3s;
	}
	.body-1 {
		color: var(--medium-grey);
		transition: color 0.3s;
	}
}
</style>
