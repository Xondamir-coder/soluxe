<template>
	<main class="container">
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
</script>

<style lang="scss" scoped>
.container {
	& > *:not(.hero):not(.header) {
		padding: 0 clamp(2.4rem, 5vw, 5rem);
	}
}
</style>
