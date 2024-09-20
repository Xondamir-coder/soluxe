<template>
	<section class="logos">
		<div class="logos__content">
			<p class="body-2">{{ $t('logos-title') }}</p>
			<h4 class="h4">{{ $t('logos-text') }}</h4>
		</div>
		<ul class="logos__list">
			<li class="logos__item" v-for="logo in logos" :key="logo">
				<component :is="logo" />
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.logos {
	display: flex;
	align-items: center;
	gap: 4.2rem;
	margin: calc(172 / 2 * 0.1rem) 0;
	@media only screen and (max-width: 500px) {
		flex-direction: column;
		align-items: start;
	}
	&__list {
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 3.5rem;
	}
	&__content {
		color: var(--medium-grey);
		& .body-2 {
			font-family: var(--font-inter);
		}
		& .h4 {
			font-weight: 700;
		}
	}
}
</style>

<script setup>
import Logo1 from '../Icons/Logo-1.vue';
import Logo2 from '../Icons/Logo-2.vue';
import Logo3 from '../Icons/Logo-3.vue';
import Logo4 from '../Icons/Logo-4.vue';
import Logo5 from '../Icons/Logo-5.vue';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
</script>
