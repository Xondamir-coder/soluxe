<template>
	<section class="post" id="post">
		<img class="post__img" src="@/images/work-1.jpg" alt="work 1" />
		<div class="post__content">
			<h4 class="cap-1">{{ $t('post-label') }}</h4>
			<h1 class="h1">{{ $t('post-title') }}</h1>
			<p class="body-1">{{ $t('post-text') }}</p>
			<button class="button">{{ $t('get-touch') }}</button>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#post {
	@media only screen and (max-width: 768px) {
		padding: 0;
	}
}
.post {
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		grid-column: 1 / span 15;
		grid-row: 1/2;
		@media only screen and (max-width: 1000px) {
			grid-column: 1/-1;
			grid-row: 1 / span 1;
		}
	}
	&__content {
		padding: 4rem;
		padding-right: 1rem;
		background-color: #fff;
		align-self: end;
		grid-row: 1/2;
		grid-column: 10/-1;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 20px;
		@media only screen and (max-width: 1000px) {
			grid-column: 1/-1;
			grid-row: 2 / span 1;
			padding: 35px 0;
		}
		@media only screen and (max-width: 768px) {
			padding: 35px;
		}
	}
}
</style>
