<template>
	<section class="contact" id="contact">
		<div class="contact__header">
			<h3 class="cap-3">{{ $t('contact-label') }}</h3>
			<h1 class="h1">{{ $t('contact-title') }}</h1>
			<p class="body-1">{{ $t('contact-text') }}</p>
		</div>
		<div class="contact__main">
			<iframe
				:title="$t('address-map')"
				class="contact__map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11989.705769446253!2d69.26809392501588!3d41.29958574046737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad956f1add7%3A0xdf0b6f3d14194455!2s6!5e0!3m2!1sen!2s!4v1726764454518!5m2!1sen!2s"
				width="100%"
				height="100%"
				style="border: 0"
				allowfullscreen="true"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
			<div class="contact__content">
				<div class="contact__content-head">
					<div class="contact__col">
						<p class="body-2">{{ $t('contact-label-1') }}</p>
						<h5 class="h5">
							{{ $t('contact-text-1') }}
						</h5>
						<h5 class="h5">
							{{ $t('contact-text-2') }}
						</h5>
						<p class="body-1">{{ $t('contact-subtext') }}</p>
					</div>
					<div class="contact__col">
						<p class="body-2">{{ $t('contact-label-2') }}</p>
						<a class="h5" href="tel:+020 7993 2905">020 7993 2905 </a>
						<a href="mailto:hello@finsweet.com" class="body-1">hello@finsweet.com </a>
					</div>
				</div>
				<form class="contact__form" @submit.prevent="submitMessage">
					<input
						:placeholder="$t('full-name')"
						type="text"
						v-model="name"
						class="contact__input"
						required />
					<input
						required
						:placeholder="$t('email')"
						type="email"
						v-model="email"
						class="contact__input" />
					<button type="submit" class="button">
						{{ isLoading ? $t('sending') : isSent ? $t('sent') : $t('send-msg') }}
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.contact {
	--margin: calc(156 / 2 * 0.1rem);
	display: flex;
	flex-direction: column;
	gap: var(--margin);
	margin: var(--margin) 0;

	&__map {
		min-height: 300px;
	}
	&__input {
		padding: 1.2rem;
		font-size: clamp(14px, 0.4vw + 0.55rem, 18px);
		border: 1px solid rgba(109, 110, 118, 0.5);
		color: var(--black);
		&:user-invalid {
			border-color: red !important;
			color: red;
		}
		&:focus {
			border-color: var(--yellow);
			outline: none;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	&__form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		z-index: 2;
	}
	&__content {
		&-head {
			background-image: url(@/images/work-6.avif);
			background-size: cover;
			aspect-ratio: 2.5;
			background-position: center;
			color: #fff;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			padding: calc(58 / 2 * 0.1rem) calc(52 / 2 * 0.1rem);
			gap: 1.7rem;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
			}
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
		gap: 4rem;
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

<script setup>
import env from '@/env';
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const isLoading = ref(false);
const isSent = ref(false);

const submitMessage = async () => {
	name.value = name.value.trim();
	email.value = email.value.trim();

	if (!name.value || !email.value) return;

	isLoading.value = true;

	const text = `
Type: Message	
Name: ${name.value}
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

	name.value = '';
	email.value = '';

	setTimeout(() => {
		isSent.value = false;
	}, 2000);
};
</script>
