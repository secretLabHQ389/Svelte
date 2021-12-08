<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let todo;

	let div;

	afterUpdate(() => {
		flash(div);
	});
</script>

<!-- immutable={true} same as immutable -->
<svelte:options immutable={true} />

<!-- The options that can be set here are:

immutable={true} — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed
immutable={false} — the default. Svelte will be more conservative about whether or not mutable objects have changed
accessors={true} — adds getters and setters for the component's props
accessors={false} — the default
namespace="..." — the namespace where this component will be used, most commonly "svg"
tag="..." — the name to use when compiling this component as a custom element
Consult the  for more information on these options. -->

<!-- the text will flash red whenever
     the `todo` object changes -->
<div bind:this={div} on:click>
	{todo.done ? '👍': ''} {todo.text}
</div>

<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>