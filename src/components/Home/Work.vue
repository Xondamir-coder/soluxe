<template>
	<section class="work" id="work">
		<h2 class="work__title h2">{{ $t('work-title') }}</h2>
		<ul class="work__list">
			<li class="work__item" v-for="work in works" :key="work.title">
				<img class="work__item-img" :src="work.img" :alt="work.title" />
				<div class="work__item-content">
					<h4 class="h4">{{ work.title }}</h4>
					<p class="work__item-text">{{ work.company }}</p>
				</div>
				<div class="work__badge">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11.4679 1V9.125C11.4679 9.24932 11.4186 9.36855 11.3307 9.45646C11.2427 9.54436 11.1235 9.59375 10.9992 9.59375C10.8749 9.59375 10.7556 9.54436 10.6677 9.45646C10.5798 9.36855 10.5304 9.24932 10.5304 9.125V2.13281L1.32732 11.3281C1.2403 11.4151 1.12227 11.464 0.999195 11.464C0.876124 11.464 0.758094 11.4151 0.67107 11.3281C0.584046 11.2411 0.535156 11.1231 0.535156 11C0.535156 10.8769 0.584046 10.7589 0.67107 10.6719L9.86638 1.46875H2.8742C2.74987 1.46875 2.63065 1.41936 2.54274 1.33146C2.45483 1.24355 2.40545 1.12432 2.40545 1C2.40545 0.87568 2.45483 0.756451 2.54274 0.668544C2.63065 0.580636 2.74987 0.53125 2.8742 0.53125H10.9992C11.1235 0.53125 11.2427 0.580636 11.3307 0.668544C11.4186 0.756451 11.4679 0.87568 11.4679 1Z"
							fill="#DAC5A7" />
					</svg>
				</div>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss">
.work {
	display: flex;
	flex-direction: column;
	margin-top: 6.5rem;
	gap: 54px;
	&__badge {
		grid-area: 1/1/2/2;
		place-self: center;
		width: 46px;
		height: 46px;
		padding: 8px 12px 8px 12px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		outline: 1px solid rgba(218, 197, 167, 0.3);
		background: linear-gradient(to right, #aa9c8f, #474d4d);
		opacity: 0;
		transform: translateY(15px) rotate(180deg);
		transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
		z-index: 2;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
		gap: 30px;
	}
	&__item {
		position: relative;
		display: grid;
		cursor: pointer;
		&::before {
			content: '';
			grid-area: 1/1/2/2;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
			z-index: 1;
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
		}
		&:hover {
			.work__badge,
			&::before {
				opacity: 1;
			}
			.work__badge {
				transform: translateY(0px) rotate(0);
			}
		}
		&-img {
			grid-area: 1/1/2/2;
			width: 100%;
			object-fit: cover;
		}
		&-content {
			align-self: end;
			justify-self: center;
			margin-bottom: 1.6rem;
			backdrop-filter: blur(10px);
			grid-area: 1/1/2/2;
			width: 95%;
			color: #fff;
			border: 1px solid rgba(255, 255, 255, 0.15);
			background: rgba(255, 255, 255, 0.05);
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.6rem 0.8rem;
			border-radius: 2px;
		}
		&-text {
			text-transform: uppercase;
			letter-spacing: 1.5px;
			font-size: clamp(10px, 0.9vw, 16px);
		}
	}
	&__title {
		color: var(--yellow);
		text-align: center;
	}
}
</style>

<script setup>
import { i18n } from '@/locales';
import { computed } from 'vue';
import workImg1 from '@/images/work-1.jpg';
import workImg2 from '@/images/work-2.jpg';
import workImg3 from '@/images/work-3.jpg';
import workImg4 from '@/images/work-4.jpg';
import workImg5 from '@/images/work-5.jpg';
import workImg6 from '@/images/work-6.jpg';

const works = computed(() => [
	{
		title: i18n.global.t('work-title-1'),
		company: i18n.global.t('work-company-1'),
		img: workImg1
	},
	{
		title: i18n.global.t('work-title-2'),
		company: i18n.global.t('work-company-2'),
		img: workImg2
	},
	{
		title: i18n.global.t('work-title-3'),
		company: i18n.global.t('work-company-3'),
		img: workImg3
	},
	{
		title: i18n.global.t('work-title-4'),
		company: i18n.global.t('work-company-4'),
		img: workImg4
	},
	{
		title: i18n.global.t('work-title-5'),
		company: i18n.global.t('work-company-5'),
		img: workImg5
	},
	{
		title: i18n.global.t('work-title-6'),
		company: i18n.global.t('work-company-6'),
		img: workImg6
	}
]);
</script>
