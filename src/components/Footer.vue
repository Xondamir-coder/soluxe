<template>
	<footer class="footer" id="footer">
		<div class="footer__head">
			<Logo class="footer__logo" />
			<LinkList class="footer__links" />
		</div>
		<div class="footer__main">
			<h2 class="h2">{{ $t('footer-subscribe') }}</h2>
			<form class="footer__form" @submit.prevent="submitEmail">
				<input
					:placeholder="$t('enter-email')"
					type="email"
					required
					v-model="email"
					class="footer__input body-1" />
				<button class="button footer__button" type="submit">
					{{ isLoading ? $t('sending') : isSent ? $t('sent') : $t('subscribe') }}
				</button>
			</form>
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
import { ref } from 'vue';
import Logo from './Icons/Logo.vue';
import LinkList from './LinkList.vue';
import Socials from './Socials.vue';
import env from '@/env';

const isLoading = ref(false);
const isSent = ref(false);
const email = ref('');

const submitEmail = async () => {
	email.value = email.value.trim();

	if (!email.value) return;

	isLoading.value = true;

	const text = `
Type: Subscription
Email: ${email.value}
Time: ${Intl.DateTimeFormat('en-GB', {
		dateStyle: 'short',
		timeStyle: 'short'
	}).format(new Date())}
	`;

	const res = await fetch(`https://api.telegram.org/bot${env.botToken}/sendMessage`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ chat_id: env.chat_id, text })
	});
	await res.json();

	isSent.value = true;
	isLoading.value = false;
	email.value = '';
};
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
	&__button {
		@media only screen and (max-width: 1000px) {
			width: 100%;
		}
	}
	&__form {
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}
	&__input {
		font-family: var(--font-inter);
		color: var(--medium-grey);
		background-color: transparent;
		padding: 0.7rem 1.2rem;
		border: 1px solid var(--dark-grey);

		@media only screen and (max-width: 1000px) {
			width: 100%;
		}
		&:user-invalid {
			border-color: red !important;
			color: red;
		}
		&:focus {
			border-color: var(--yellow);
			outline: none;
		}
	}
	&__main {
		padding: 4.2rem 3.2rem;
		background-color: rgba(255, 255, 255, 0.05);
		color: #fff;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: space-between;
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
