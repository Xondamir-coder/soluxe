import { createI18n } from 'vue-i18n';
import en from './en.json';
import ru from './ru.json';
import zh from './zh.json';

const locale = localStorage.getItem('lang') || navigator.language.split('-')[0];

export const i18n = createI18n({
	locale,
	fallbackLocale: 'en',
	messages: {
		en,
		ru,
		zh
	}
});

document.documentElement.lang = i18n.global.locale;

export const changeLang = newLang => {
	localStorage.setItem('lang', newLang);
	i18n.global.locale = newLang;
	document.documentElement.lang = newLang;
};
