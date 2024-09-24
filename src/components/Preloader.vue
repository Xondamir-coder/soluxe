<template>
	<div class="preloader">
		<Logo class="preloader__logo" />
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
	gsap.timeline()
		.fromTo(
			'.preloader__logo',
			{
				delay: 0.2,
				opacity: 0,
				scale: 0
			},
			{
				delay: 0.2,
				opacity: 1,
				scale: 1.1
			}
		)
		.to('.preloader__logo', {
			scale: 0.9,
			duration: 1, // Total time for one cycle (up and down)
			ease: 'power1.inOut', // Similar easing to the CSS timing
			repeat: 3, // Infinite repetition
			yoyo: true,
			onComplete: () => {
				isPreloaderActive.value = false;
			}
		})
		.to('.preloader', {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				lenis.start();
				document.querySelector('.preloader').remove();
			}
		});
});
</script>

<style lang="scss" scoped>
.preloader {
	background-color: #362e23;
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
}
</style>
