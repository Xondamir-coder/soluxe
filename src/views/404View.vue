<template>
	<main class="container">
		<Header />
		<div class="hero">
			<video class="hero__video" loop muted autoplay>
				<source src="@/videos/hero-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div class="hero__content">
				<h1 class="hero__title">404</h1>
				<h2 class="hero__subtitle">{{ $t('error-subtitle') }}</h2>
				<p class="hero__text">{{ $t('error-text') }}</p>
				<RouterLink to="/" class="button hero__button">
					<svg
						width="24"
						height="11"
						viewBox="0 0 24 11"
						fill="inherit"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M23.5547 4.78125C23.7734 4.8125 23.9141 4.95312 23.9766 5.20313C23.9453 5.42188 23.8047 5.54688 23.5547 5.57813H1.33594L5.46094 9.70312C5.58594 9.89063 5.58594 10.0781 5.46094 10.2656C5.39844 10.2969 5.30469 10.3281 5.17969 10.3594C5.08594 10.3594 4.99219 10.3281 4.89844 10.2656L0.117188 5.48438C0.0859375 5.45313 0.0546878 5.40625 0.0234376 5.34375C-0.00781254 5.25 -0.00781254 5.14063 0.0234376 5.01563C0.0234376 4.98438 0.0546873 4.9375 0.117188 4.875L4.89844 0.0937505C5.08594 -0.0312502 5.27344 -0.0312502 5.46094 0.0937505C5.58594 0.281251 5.58594 0.46875 5.46094 0.65625L1.33594 4.78125H23.5547Z"
							fill="inherit" />
					</svg>
					{{ $t('back') }}
				</RouterLink>
			</div>
		</div>
	</main>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>
.hero {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 0 34px;

	&__button {
		display: flex;
		align-items: center;
		gap: 20px;
		svg {
			fill: #fff;
			transition: fill 0.3s;
		}
		&:hover svg {
			fill: #000;
		}
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: radial-gradient(
			30.56% 76.04% at 74.58% 0%,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.6) 100%
		);
	}
	&__subtitle {
		font-size: max(2.4rem, 22px);
		font-weight: 800;
	}
	&__text {
		font-size: max(0.9rem, 16px);
		font-weight: 500;
		line-height: 1.6;
	}
	&__content {
		max-width: 800px;
		z-index: 2;
		color: #fff;
		font-family: var(--font-inter);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 32px;
	}
	&__title {
		background: linear-gradient(
			91.17deg,
			#f7e7c6 -4.01%,
			#f9d683 36.14%,
			#ffdd77 77.44%,
			#c2e9cd 106.11%
		);
		font-size: max(10rem, 97px);
		font-weight: 700;
		background-clip: text;
		color: transparent;
		line-height: 0.8;
	}
	&__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
