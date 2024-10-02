<template>
	<section class="contact" id="contact">
		<div class="contact__header">
			<h3 class="cap-3">{{ $t('contact-label') }}</h3>
			<h1 class="h1">{{ $t('contact-title') }}</h1>
			<p class="body-1">{{ $t('contact-text') }}</p>
		</div>
		<div class="contact__main">
			<div class="contact__content">
				<img
					loading="lazy"
					class="contact__img"
					src="@/images/work-6.avif"
					alt="ladies in background"
					width="736"
					height="570" />
				<div class="contact__content-head">
					<div class="contact__col">
						<p class="body-2">{{ $t('contact-label-1') }}</p>
						<h5 class="h5">
							{{ $t('contact-text-1') }}
						</h5>
						<h5 class="h5">
							{{ $t('contact-text-2') }}
						</h5>
					</div>
					<div class="contact__col">
						<p class="body-2">{{ $t('contact-label-2') }}</p>
						<a class="h5" href="tel:+998 90 991 90 20">+998 90 991 90 20</a>
						<a href="mailto:info@soluxetour.uz" class="body-1">info@soluxetour.uz </a>
					</div>
				</div>
				<div class="contact__col">
					<h5 class="h5">{{ $t('contact-label-3') }}</h5>
					<h5 class="h5">{{ $t('contact-address') }}</h5>
				</div>
				<p class="body-1 contact__subtext">{{ $t('contact-subtext') }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	gsap.from(document.querySelector('.contact__header').children, {
		y: 50,
		opacity: 0,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.contact__header',
			start: 'top bottom',
			end: 'bottom center',
			scrub: 1
		}
	});
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.contact__main',
			scrub: 1,
			start: 'top bottom',
			end: 'center 40%'
		}
	});
	tl.from('.contact__content', {
		x: '25%',
		opacity: 0
	});
});
</script>

<style scoped lang="scss">
.contact {
	--margin: calc(156 / 2 * 0.1rem);
	display: flex;
	flex-direction: column;
	gap: var(--margin);
	margin: var(--margin) 0;
	overflow: hidden;
	a {
		transition: color 0.3s;
	}
	a:hover {
		color: var(--yellow);
	}
	p,
	h5 {
		z-index: 1;
	}
	&__grid {
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		z-index: 2;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		inset: 0;
	}
	&__content {
		padding: calc(58 / 2 * 0.1rem) calc(52 / 2 * 0.1rem);
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1;
		}
		&-head {
			color: #fff;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 1.7rem;
			position: relative;

			.body-2,
			.body-1 {
				color: rgb(255, 255, 255, 0.6);
			}
			.body-2 {
				padding-bottom: 6px;
				border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
			}
		}
	}
	&__main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(max(20rem, 300px), 1fr));
		color: #fff;
	}
	&__header {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 20px;
		text-align: center;
		.body-1 {
			text-align: center;
			color: var(--medium-grey);
			max-width: 50ch;
		}
	}
	.cap-3 {
		text-transform: uppercase;
	}
}
</style>
