<script lang="ts">
	import Nested from './Nested.svelte'
	export let name;
	export let unescapedText;

	let count: number = 0;
	$: doubled = count * 2; //'reactive values- changes when above value does'
	$: {
		console.log(`the count is ${count}`);
		alert(`Reactive alert for the count ${count}.`);
		if (count >= 5) {
			alert('Count is too high.')
		}
	}

	const incrementCounter = () => {
		count += 1
	}

	//array methods, like .push() don't give responding data because doesn't change assignment
	//rather, assign a new variable to show a change:
	let guestList: string[] = ['guest'];
	//you need to redefine varaibles by assignment, meaning it requires an = sign
	const addAnother = () => {
		guestList = [...guestList, 'guest']
	}
	//when redefining a property, needs to assign the new object to the variable name:
	//const foo = obj.foo;
	//foo.bar = 'baz';
	//follow that up with this or it won't update:
	//obj = obj
</script>

<main>
	<h1>hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img src={'images/imageExample.png'} alt='{name} used inside alt as variable' />
	<Nested/>
	<p>{@html unescapedText}</p>
	<button on:click={incrementCounter}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
	<p>Doubled count: {doubled}</p>
	<button on:click={addAnother}>Add another invite:</button>
	<p>{guestList}</p>
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