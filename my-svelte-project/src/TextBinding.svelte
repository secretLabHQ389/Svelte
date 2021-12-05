<script>
	let name = 'change the value';
    let a = 1;
	let value = 'Shorthand for value called value.';
</script>

<input bind:value={name}>

<h1>Your input is: {name}!</h1>

<p>These other types are processed as strings automatically:</p>

<label>
	<input type=number value={a} min=0 max=10>
	<input type=range value={a} min=0 max=10>
</label>

<textarea bind:value={value}></textarea>
<br/>
Shorthand:
<br/>
<textarea bind:value></textarea>