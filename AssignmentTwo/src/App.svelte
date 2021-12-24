<script>
	import PasswordCard from './PasswordCard.svelte'

	export let 
		currentPassword,
		errorMessage = '',
		passwords = []


	$: if (currentPassword.trim().length < 5 && currentPassword.trim().length !== 0) {
		errorMessage = 'Too short'
	} else if (currentPassword.trim().length > 10) {
		errorMessage = 'Too long'
	} else {
		errorMessage = ''
	}

	function addPasswordToList() {
		if (errorMessage === '') {
			passwords = [...passwords, currentPassword]
			return
		}
	}

	function removePasswordHandler(passwordsList, chosenToRemove) {
		passwords = passwordsList.filter(password => password !== chosenToRemove)
		return
	}

</script>

<style>
	#form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
	<div class="form-control">
	  <label for="currentPassword">Password</label>
	  <input 
	  	  type="password"
		  bind:value={currentPassword} 
		  id="currentPassword" 
		  placeholder={'Enter password'}
		  />
	</div>
	<div>{errorMessage}</div>
</div>

<button on:click={addPasswordToList}>Add Password to List</button>

{#each passwords as password, i (Math.random())}
<h2>#{i+ 1}</h2>
	<PasswordCard 
	    password={password}
		removePasswordHandler={() => removePasswordHandler(passwords, password)}
		/>
{:else}
	<p>Please submit a password.</p>
{/each}