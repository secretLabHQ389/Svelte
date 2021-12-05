<script>
	import EventDispatch from './EventDispatch.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const forward = event => {
		dispatch('message', event.detail);
	}
</script>

<main>
    <EventDispatch on:message={forward}/>
</main>