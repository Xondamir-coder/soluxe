<template>
	<div class="preloader">
		<Logo class="preloader__logo" />
		<div class="preloader__banner"></div>
	</div>
</template>

<script setup>
import lenis from '@/lenis';
import Logo from './Icons/Logo.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { isPreloaderActive } from '@/state';

lenis.stop();

onMounted(() => {
	lenis.stop();
	const pathLength = document
		.querySelector('.preloader__logo')
		.querySelector('.icon')
		.getTotalLength();

	gsap.timeline()
		.to('.preloader__logo .icon', {
			fill: '#d4bb8a',
			delay: 1,
			duration: 1
		})
		.from('.preloader__logo', {
			y: 50,
			scale: 2
		})
		.from(
			'.preloader__logo .text',
			{
				transformOrigin: 'center',
				opacity: 0,
				scale: 0
			},
			'-=0.5'
		)
		.from('.preloader__banner', {
			x: '100%',
			duration: 1
		})
		.to('.preloader', {
			opacity: 0,
			delay: 0.5,
			display: 'none',
			onStart: () => {
				isPreloaderActive.value = false;
				lenis.start();
			}
		});

	gsap.fromTo(
		'.preloader__logo .icon',
		{
			strokeDashoffset: pathLength,
			strokeDasharray: pathLength
		},
		{
			strokeDashoffset: 0,
			duration: 6
		}
	);
});
</script>

<style lang="scss" scoped>
.preloader {
	background-color: var(--green);
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: 101;
	display: grid;
	place-content: center;
	&__logo {
		width: max(10rem, 150px);
		height: max(10rem, 150px);
	}
	&__banner {
		position: absolute;
		inset: 0;
		background-color: #000;
	}
}
</style>
