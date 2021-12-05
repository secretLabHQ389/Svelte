<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const sayHello = () => {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<main>
    <button on:click={sayHello}>
        Click to say hello
    </button>
</main>