<script>
	//lect. 16 4:30, calls this 'Pascal Case', as I said:
	import ContactCard from './ContactCard.svelte'

	export let name, age;

	$: upperCaseName = name.toUpperCase()
	$: console.log(name)
	$: if (name === 'Ryan') {
		age = 24
	}

	function incrementAge() {
		age += 1
	}

	function changeName() {
		name = 'Ryan'
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name} age {age}! Hey, {upperCaseName}.</h1>
<button on:click={incrementAge}>Next Year</button>
<button on:click={changeName}>Name: Ryan</button>
<input type='text' bind:value={name} />

<ContactCard />