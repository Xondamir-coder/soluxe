<template>
	<footer class="footer" id="footer">
		<div class="footer__head">
			<Logo class="footer__logo" />
			<LinkList class="footer__links" />
		</div>
		<div class="footer__bottom">
			<div class="footer__info">
				<p class="body-1">{{ $t('address') }}</p>
				<a href="mailto:Soluxeevents@gmail.com " class="body-1">Soluxeevents@gmail.com </a>
			</div>
			<Socials class="footer__socials fill-grey" />
		</div>
	</footer>
</template>

<script setup>
import { onMounted } from 'vue';
import Logo from './Icons/Logo.vue';
import LinkList from './LinkList.vue';
import Socials from './Socials.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	gsap.from('.footer__head', {
		y: -150,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top 80%',
			toggleActions: 'play none reverse reverse'
		}
	});
	gsap.from('.footer__bottom', {
		y: 150,
		opacity: 0,
		scrollTrigger: {
			trigger: '.footer',
			start: 'top 80%',
			toggleActions: 'play none reverse reverse'
		}
	});
});
</script>

<style lang="scss" scoped>
#footer {
	padding-top: 2.7rem;
	padding-bottom: 2.7rem;
}
.fill-grey {
	color: var(--medium-grey);
}
.footer {
	background-color: var(--black);
	display: flex;
	flex-direction: column;
	gap: 2rem;
	overflow: hidden;

	&__socials {
		@media only screen and (max-width: 500px) {
			width: 41px;
			height: 41px;
		}
	}
	&__logo {
		@media only screen and (max-width: 500px) {
			width: 40%;
			height: 40%;
		}
	}
	&__links > * {
		@media only screen and (max-width: 500px) {
			flex-direction: column;
			font-size: 20px;
		}
	}
	&__links {
		@media only screen and (max-width: 500px) {
			order: -1;
		}
	}
	&__info {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	&__bottom {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		@media only screen and (max-width: 500px) {
			flex-direction: column;
			gap: 15px;
		}
		.body-1 {
			color: rgba(255, 255, 255, 0.7);
			font-family: var(--font-inter);
		}
	}
	&__head {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}
</style>
