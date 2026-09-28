<script>
	// LabFriendCard.svelte
	// Props arrive the same way as ToggleFriendCard.svelte — that part's
	// given. Everything in the markup below is up to you.
	let { friend, onToggle } = $props();
</script>

<li>
	
	{#if friend.favourite}
		⭐ {friend.name} — favourite
	{:else}
		⚪ {friend.name} — not favourite
	{/if}
	<button onclick={() => onToggle(friend)}>Toggle</button>
	<!--
		TODO 2: replace the line above (or add alongside it) an
		{#if friend.favourite} ... {:else} ... {/if} block that shows
		⭐ when favourite is true, and ☆ when it's false. Look at
		ToggleFriendCard.svelte's {#if friend.online} block for the shape.
	-->

	<!--
		TODO 3: add a <button> here that calls onToggle(friend) when
		clicked — same as ToggleFriendCard.svelte's button.
	-->
</li>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0;
		border-bottom: 1px solid #eee;
	}

	button {
		font-size: 0.85rem;
	}
</style>
<!--
	STRETCH CHALLENGE (once TODOs 1–3 are working):
	Add a second function, passed down the same way as onToggle — call it
	onRemove. In LabList.svelte, write removeFriend(friend) using
	friends = friends.filter(f => f !== friend) to create a new array
	without that friend, then wire up an onRemove prop and a "Remove"
	button here, the same way you wired up onToggle.
-->
