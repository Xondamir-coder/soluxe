<template>
	<main class="container" id="main">
		<Preloader />
		<Header />
		<Hero />
		<About />
		<Team />
		<Services />
		<Work />
		<Logos />
		<Post />
		<Contact />
		<Footer />
	</main>
</template>

<script setup>
import { onMounted } from 'vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import About from '@/components/Home/About.vue';
import Contact from '@/components/Home/Contact.vue';
import Hero from '@/components/Home/Hero.vue';
import Logos from '@/components/Home/Logos.vue';
import Post from '@/components/Home/Post.vue';
import Services from '@/components/Home/Services.vue';
import Team from '@/components/Home/Team.vue';
import Work from '@/components/Home/Work.vue';
import Preloader from '@/components/Preloader.vue';
import '@/lenis';

window.addEventListener('unload', e => {
	window.scrollTo(0, 0);
});

onMounted(() => {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			const headerOffset = 100; // Adjust this to your header height
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
});
</script>

<style lang="scss" scoped>
.container {
	& > *:not(.hero):not(.header) {
		padding: 0 clamp(2.4rem, 5vw, 5rem);
	}
}
</style>
