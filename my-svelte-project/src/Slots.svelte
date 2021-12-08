<script>
	import Box from './Box.svelte';
    import ContactCard from './ContactCard.svelte';
    import Project from './Project.svelte'
	import Comment from './Comment.svelte'
</script>

<Box>
	<!-- put content here -->
	<h2>Hello!</h2>
	<p>This is a box. It can contain anything.</p>
</Box>

<Box />

<ContactCard>
	<!-- contact details go here -->
	<span slot="name" let:hovering={hovering}> 
		<div class:active={hovering}>
			<p>P. Sherman</p>
			{#if hovering}
				<p>I am being hovered upon.</p>
			{:else}
				<p>Hover over me!</p>
			{/if}
		</div>
	</span>

	<span slot="address" let:hovering={hovering}>
		<div class:active={hovering}>
			<p>42 Wallaby Way<br>
				Sydney
			</p>
			{#if hovering}
				<p>I am being hovered upon.</p>
			{:else}
				<p>Hover over me!</p>
			{/if}
		</div>
	</span>
</ContactCard>


<h1>
	Projects
</h1>

<ul>
	<li>
		<Project
			title="Add Typescript support"
			tasksCompleted={25}
			totalTasks={57}
		>
			<div slot="comments">
				<Comment name="Ecma Script" postedAt={new Date('2020-08-17T14:12:23')}>
					<p>Those interface tests are now passing.</p>
				</Comment>
			</div>
		</Project>
	</li>
	<li>
		<Project
			title="Update documentation"
			tasksCompleted={18}
			totalTasks={21}
		/>
	</li>
</ul>

<style>
	h1 {
		font-weight: 300;
		margin: 0 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem;
		display: flex;
	}

	@media (max-width: 600px) {
		ul {
			flex-direction: column;
		}
	}

	li {
		padding: 0.5rem;
		flex: 1 1 50%;
		min-width: 200px;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>