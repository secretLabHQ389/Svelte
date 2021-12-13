<script>
	//lect. 16 4:30, calls this 'Pascal Case', as I said:
	import ContactCard from './ContactCard.svelte'

	export let name, age, job = 'plummer', bio = 'popular with friends, do their plumming';

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
Enter Name:
<input type='text' bind:value={name} />
Job:
<input type="text" bind:value={job} />
Biography
<textarea type="text" bind:value={bio} />

<ContactCard 
	userName={name} 
	jobTitle={job}
	description={bio}
	imageProp={'https://d8oklrjckdahn.cloudfront.net/library/MwGo/2017/3/7/11G132324/Images/3_Bears_Approach_by_Jim_Lawrence-4f4d16b51311853286570ff0d3022a81.jpg'}
	/>