export default interface ILanguageSwitcher {
	currentLanguage?: 'es' | 'en';
	onLanguageChange?: (language: 'es' | 'en') => void;
}
