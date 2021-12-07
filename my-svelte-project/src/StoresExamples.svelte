<script>
	import { 
        count, 
        time, 
        elapsed, 
        countOrigRefactored,
        name,
        greeting
    } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	// let count_value;

	// count.subscribe(value => {
	// 	count_value = value;
	// });

    const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<!-- <h1>The count is {count_value}</h1> -->
<h1>The count is {$count}</h1>

<h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>

<button on:click={countOrigRefactored.increment}>Click for count from store: {$countOrigRefactored}</button>
<p>Count refactored is: {$countOrigRefactored}</p>

<Incrementer/>
<Decrementer/>
<Resetter/>

<h1>{$greeting}</h1>
<input bind:value={$name}>

<button on:click="{() => $name += '!'}">
	Add exclamation mark!
</button>