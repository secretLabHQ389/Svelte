<script>
	//lect. 16 4:30, calls this imported name 'Pascal Case', as I said:
	import ContactCard from './ContactCard.svelte'

	export let 
		name = 'Programmer 1', 
		/*age,*/ 
		job = 'software', 
		bio = 'Frontend, initially console programs.', 
		image = '',
		done = false,
		formstate = 'empty',
		createdContacts = []


	// $: upperCaseName = name.toUpperCase()
	// $: console.log(name)
	// $: if (name === 'Ryan') {
	// 	age = 24
	// }

	// function incrementAge() {
	// 	age += 1
	// }

	// function changeName() {
	// 	name = 'Ryan'
	// }

	function addContact() {
		if (
			name.trim().length == 0 ||
			job.trim().length == 0 ||
			bio.trim().length == 0 ||
			image.trim().length == 0
		) {
		formstate = 'invalid'
		return
		}
		done = true
		formstate = 'done'
		createdContacts = [...createdContacts, ({
			name,
			job,
			bio,
			image
		})]
	}

	function deleteFirst() {
		createdContacts = createdContacts.slice(1)


	}

	function deleteLast() {
		createdContacts = createdContacts.slice(0, -1)
	}
</script>

<style>
	/* h1 {
		color: purple;
	} */
	#form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<!-- <h1>Hello {name} age {age}! Hey, {upperCaseName}.</h1>
<button on:click={incrementAge}>Next Year</button>
<button on:click={changeName}>Name: Ryan</button>
Enter Name:
<input type='text' bind:value={name} />
Job:
<input type="text" bind:value={job} />
Biography
<textarea type="text" bind:value={bio} /> -->

<div id="form">
	<div class="form-control">
	  <label for="userName">User Name</label>
	  <input type="text" bind:value={name} id="userName" />
	</div>
	<div class="form-control">
	  <label for="jobTitle">Job Title</label>
	  <input type="text" bind:value={job} id="jobTitle" />
	</div>
	<div class="form-control">
	  <label for="image">Image URL</label>
	  <!-- 'https://d8oklrjckdahn.cloudfront.net/library/MwGo/2017/3/7/11G132324/Images/3_Bears_Approach_by_Jim_Lawrence-4f4d16b51311853286570ff0d3022a81.jpg' -->
	  <input type="text" bind:value={image} id="image" />
	</div>
	<div class="form-control">
	  <label for="desc">Description</label>
	  <textarea rows="3" bind:value={bio} id="desc" />
	</div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

{#if formstate === 'invalid'}
	<p>Invalid input.</p>
{/if}

{#each createdContacts as contact, i (Math.random())}
<h2>#{i+ 1}</h2>
<ContactCard 
	userName={contact.name} 
	jobTitle={contact.job}
	description={contact.bio}
	imageProp={contact.image}
	/>
{:else}
	<p>Please submit a contact to our list.</p>
{/each}