

<script lang="ts">
	import Nested from './Nested.svelte'
	export let name;
	export let unescapedText;
</script>

<main>
	<h1>hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img src={'images/imageExample.png'} alt='{name} used inside alt as variable' />
	<Nested/>
	<p>{@html unescapedText}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		/*text-transform: uppercase;*/
		text-transform: capitalize;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>