<template>
	<header class="header" :class="{ 'menu-open': isMenuOpen }">
		<button :aria-label="$t('reload-page')" @click="reloadPage">
			<Logo />
		</button>
		<button
			class="header__menu"
			@click="toggleMenu"
			:class="{ active: isMenuOpen }"
			:aria-label="$t('open-menu')"></button>
		<LinkList class="links" />
		<LangButton />
	</header>
	<div class="menu">
		<LinkList class="menu__links" @click="toggleMenu" />
		<LangButton />
		<button class="button">{{ $t('call-us') }}</button>
	</div>
</template>

<script setup>
import Logo from './Icons/Logo.vue';
import LangButton from './LangButton.vue';
import LinkList from './LinkList.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const reloadPage = () => {
	window.scrollTo({
		top: 0,
		behavior: 'instant'
	});
	window.location.reload();
};
</script>

<style lang="scss" scoped>
@keyframes scale-up {
	from {
		transform: scale(0.7) perspective(800px);
		opacity: 0;
	}
	to {
		transform: scale(1) perspective(800px);
		opacity: 1;
	}
}
.header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	background-color: rgba(0, 0, 0, 0.3);
	// background-color: rgba(255, 255, 255, 0.05);
	color: #fff;
	display: grid;
	grid-template-columns: max-content 1fr max-content;
	align-items: center;
	overflow: hidden;
	padding: 12px 3rem;
	animation: scale-up 1s;
	transform-origin: top;
	transform-style: preserve-3d;
	@media only screen and (max-width: 1000px) {
		transition: background-color 0.4s, backdrop-filter 0.4s;
		display: flex;
		justify-content: space-between;
	}
	.lang {
		@media only screen and (max-width: 1000px) {
			display: none;
		}
	}
	&.menu-open {
		background-color: transparent;
		backdrop-filter: none;
		border: none;
		& + .menu {
			transform: translateX(0);
		}
	}
	&__menu {
		width: 24px;
		height: 2px;
		background-color: #fff;
		border-radius: 2px;
		position: relative;
		transition: background-color 0.3s;
		@media only screen and (min-width: 1000px) {
			display: none;
		}
		&.active {
			background-color: transparent;
			&::before {
				transform: rotate(41deg);
			}
			&::after {
				transform: rotate(-43deg);
			}
		}
		&::before {
			top: -8px;
		}
		&::after {
			top: 8px;
		}
		&::before,
		&::after {
			content: '';
			display: block;
			width: inherit;
			height: inherit;
			background-color: #fff;
			border-radius: inherit;
			position: absolute;
			transition: transform 0.3s;
			transform-origin: left;
		}
	}
}
.menu {
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(20px);
	z-index: 50;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	justify-content: center;
	padding-top: 60px !important;
	transform: translateX(100%);
	transition: transform 0.6s;
	.lang {
		font-size: max(18px, 1vh + 1.5rem);
		color: #fff;
		margin-right: 0;
	}
	&__links > * {
		font-size: clamp(40px + 1vh, 2.5vw + 1rem, 70px);
		font-weight: 700;
		letter-spacing: -2px;
		flex-direction: column;
		align-items: center;
		font-family: var(--font-sen);
		gap: 0;
		a {
			font-family: var(--font-sen);
		}
	}
}
.links {
	margin: 0 auto;
	@media only screen and (max-width: 1000px) {
		display: none;
	}
}
</style>
