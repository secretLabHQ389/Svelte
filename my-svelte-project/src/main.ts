import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Friend',
		unescapedText: `This text has <strong>tags</strong> in it!!!`
	}
});

export default app;