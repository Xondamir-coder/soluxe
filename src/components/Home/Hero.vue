<template>
	<section id="home" class="hero">
		<video class="hero__video" loop muted autoplay>
			<source src="@/videos/hero-video.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="hero__content">
			<h1 class="h1-big hero__title">
				{{ $t('hero-title') }}
			</h1>
			<p class="body-1">
				{{ $t('hero-subtitle') }}
			</p>
			<div class="hero__buttons">
				<button class="button">
					{{ $t('projects') }}
				</button>
				<button class="button hero__button hero__button-call">
					{{ $t('call-us') }}
				</button>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	&__video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
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
	&__buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	&__button-call {
		background-color: transparent;
		border: 1px solid var(--yellow);
		color: #fff;
		&:hover {
			color: var(--yellow);
			background-color: #fff;
		}
	}
	&__content {
		z-index: 1;
		max-width: 40rem;
		color: #fff;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		text-align: center;
		h1 {
			text-align: center;
		}
	}
}
</style>
