import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Programmer 1',
		age: 18
	}
});

export default app;