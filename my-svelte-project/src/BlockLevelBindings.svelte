<script>
	let w = 3;
	let h = 5;
	let size = 42;
	let text = 'Drag the range to change size.';
</script>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<!-- <div>
	<span style="font-size: {size}px">{text}</span>
</div> -->

These bindings are read only, so changing the assigned value won't change the client:
<br/>
<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>

<style>
	input { display: block; }
	div { display: inline-block; }
	span { word-break: break-all; }
</style>