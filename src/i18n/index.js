import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// translation
import english from './english.json';
import spanish from './spanish.json';

i18n.use(initReactI18next).init({
	lng: 'en',
	compatibilityJSON: 'v3',
	resources: {
		en: english,
		es: spanish,
	},
	react: {
		useSuspense: false,
	},
	interpolation: {
		escapeValue: false,
	},
});
export default i18n;
