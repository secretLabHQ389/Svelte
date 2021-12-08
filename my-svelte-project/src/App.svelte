<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	//"prevent jank"-
	import Nested from './Nested.svelte'
	import EventDispatch from './EventDispatch.svelte';
	import OuterForward from './OuterForward.svelte';
	import OuterForwardShorthand from './OuterForwardShorthand.svelte';
	import CustomButton from './CustomButton.svelte';
	import TextBinding from './TextBinding.svelte';
	import CheckboxBinding from './CheckboxBinding.svelte';
	import GroupBinding from './GroupBinding.svelte';
	import SelectorBinding from './SelectorBinding.svelte';
	import BindInputToProperty from './BindInputToProperty.svelte';
	import VideoBindings from './VideoBindings.svelte';
	import BlockLevelBindings from './BlockLevelBindings.svelte';
	import Keypad from './Keypad.svelte';
	import OnMountLifeCycle from './OnMountLifeCycle.svelte';
	import UpdateScrollExample from './UpdateScrollExample.svelte';
	import Timer from './Timer.svelte';
	import TickToPreventReactiveAction from './TickToPreventReactiveAction.svelte';
	import StoresExamples from './StoresExamples.svelte';
	import MotionExamples from './MotionExamples.svelte';
	import CustomTransition from './CustomTransition.svelte';
import ActionsExample from './ActionsExample.svelte';
import ActionParameters from './ActionParameters.svelte';

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

	const objectEx = {
		name: 'Same prop format as React'
	}

	let auth = {
		loggedIn: false
	}

	const toggleStatus = () => {
		if (auth.loggedIn === false) {
			auth.loggedIn = true
		} else {
			auth.loggedIn = false
		}
	}

	const cats = [
		{
			name: 'Tom',
			production: 'Tom & Jerry'
		}, 
		{
			name: 'Sylvester',
			production: 'WB Cartoons'
		}, 
		{
			name: 'Simba',
			production: 'The Lion King'
		}, 
		{
			name: 'Mufasa',
			production: 'The Lion King'
		}, 
		{
			name: 'Tony',
			production: 'Tony the Tiger cereal'
		}]

	//when calling a function from an event, assign the function to a variable to call it, then show the output as the varaible in the HTML:
	// async function getRandomNumber() {
	// 	const res = await fetch(`tutorial/random-number`);
	// 	const text = await res.text();

	// 	if (res.ok) {
	// 		return text;
	// 	} else {
	// 		throw new Error(text);
	// 	}
	// }

	// let promise = getRandomNumber();

	// function handleClick() {
	// 	promise = getRandomNumber();
	// }
	let m = { x: 0, y: 0 };

	let oneClick: number = 0

	const modifierExample = () => {
		oneClick += 1
	}

	const handleMessage = event => {
		alert(event.detail.text);
	}

	const handleForwardedMessage = event => {
		alert(event.detail.text);
	}

	const handleClick = () => {
		alert('Button Clicked');
	}

	let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmitKeypad() {
		alert(`submitted ${pin}`);
	}

	let field;

	let open = false;
	let seconds = 0;

	const toggle = () => (open = !open);
	const handleTick = () => (seconds += 1);
</script>

<main>
	<h1>hello {name}!</h1>
	<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY}}">
		The mouse position is: {m.x} {m.y}
	</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img src={'images/imageExample.png'} alt='{name} used inside alt as variable' />
	<p>{@html unescapedText}</p>
	<button on:click={incrementCounter}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
	<p>Doubled count: {doubled}</p>
	<button on:click={addAnother}>Add another invite:</button>
	<p>{guestList}</p>
	<Nested invitees={guestList} sameObj={objectEx.name} />
	<button on:click={toggleStatus}>Log {auth.loggedIn === true ? 'Out' : 'In'}</button>
	{#if auth.loggedIn === true}
		<p transition:fade>User is logged in!</p>
	{:else}
	<!-- {: else if 5 === selection} -->
		<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>User is logged out!</p>
	{/if}

	{#each cats as {name}, i (name)}
		<li>
			{i + 1}: {name}
		</li>
	{/each}
	<!-- same as:
	{#each cats as cat (cat.name), i} cat.name is the key
		<li>
			{i + 1}: {cat.name}
		</li> 
	{/each} -->

	<!-- {#await promise}
		<p>...waiting</p>
	{:then number}
		<p>The number is {number}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await} -->
	<button on:click|once={modifierExample}>
		This button will only run once.
	</button>
	<p>Once modifier clicked: {oneClick} times.</p>

	<!-- "event directive"- on: followed by name of event being dispatched -->
	<EventDispatch on:message={handleMessage}/>

	Must pass along all events in a component tree, 'forwarding'
	One option (to limit what is dispatched):
	<OuterForward on:message={handleForwardedMessage}/>
	Second option (shorthand to dispatch all events):
	<OuterForwardShorthand on:message={handleForwardedMessage}/>
	Can also forward an event on an entire component:
	<CustomButton on:click={handleClick}/>
	Bind so that input changes also change the variable:
	<TextBinding />
	<CheckboxBinding />
	<GroupBinding />
	<SelectorBinding />
	Research examples of usage of: contenteditable="true"]
	Property binding mutates array, use event handlers to not do that:
	<BindInputToProperty />
	<VideoBindings />
	<BlockLevelBindings />
	Bind parent props to child props sparingly:
	<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
	<Keypad bind:value={pin} on:submit={handleSubmitKeypad} />
	Can also bind to component instances and then change that variable from another component:
	<input bind:this={field} />
	<button on:click="{() => field.focus()}">
		Focus field
	</button>
	<OnMountLifeCycle />
	If behavior keeps adding up, use this to reset and kill memory leak:

	<div>
		<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
		<p>
			The Timer component has been open for
			{seconds} {seconds === 1 ? 'second' : 'seconds'}
		</p>
		{#if open}
		<!-- Restart local server for random errors: -->
		<Timer callback={handleTick} />
		{/if}
	</div>

	<UpdateScrollExample />
	<!-- Tick prevents cursor from jumping to end after TAB by awaiting next microtask, such as a mouse click... -->
	<TickToPreventReactiveAction />

	<StoresExamples />

	<MotionExamples />

	<CustomTransition />

	<p>Actions examples below:</p>

	<ActionsExample />

	<ActionParameters />
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

	div {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>