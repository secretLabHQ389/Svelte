<script>
	import PasswordCard from './PasswordCard.svelte'

	export let 
		currentPassword,
		errorMessage = '',
		passwords = []

	function addPasswordToList() {
		console.log(
			'currentPassword: ', currentPassword
			+ 'length: ', currentPassword.length)
		if (
			currentPassword.length > 5
			&& currentPassword.length < 11
		) {
		errorMessage = ''
		}
		if (
			currentPassword.length < 5
		) {
		errorMessage = 'Too short'
		}
		if (
			currentPassword.length > 10
		) {
		errorMessage = 'Too long'
		}
		if (
			currentPassword.length > 5
			&& currentPassword.length < 11
		) {
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
	  	  type="text" 
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