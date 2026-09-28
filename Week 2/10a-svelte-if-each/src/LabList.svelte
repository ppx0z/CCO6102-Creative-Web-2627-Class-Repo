<script>
	// LabList.svelte — LAB EXERCISE, starts here.
	//
	// Given: the data and the toggle function, same shape as
	// ToggleDemo.svelte — a $state array, and a function that flips one
	// property on a friend object. Nothing new to write here.
	//
	// This time it's `favourite` instead of `online`, so you're not just
	// copying ToggleDemo.svelte — you have to apply the same pattern to a
	// slightly different property, on a fresh component.
	import LabFriendCard from './LabFriendCard.svelte';

	let friends = $state([
		{ name: 'Bildge', favourite: true },
		{ name: 'Izzlet', favourite: false },
		{ name: 'Arbie', favourite: false },
		{ name: 'Psalm', favourite: true }
	]);

	/** @param {{ name: string, favourite: boolean }} friend */
	function toggleFavourite(friend) {
		friend.favourite = !friend.favourite;
	}
</script>

<section>
	<h2>Lab — your turn</h2>
	<ul>
		<!--
			TODO 1: write an {#each} block here that loops over `friends`,
			rendering one <LabFriendCard> per friend. Look at how
			App.svelte renders <ToggleFriendCard> for the pattern.
			
			Pass two props to each <LabFriendCard>:
			  - friend       → the friend object for this iteration
			  - onToggle     → toggleFavourite (the function above)

			Once this compiles, you should see four plain list items
			(LabFriendCard.svelte isn't finished yet either — that's
			TODO 2 and 3, in that file).
		-->
			<ul>
		{#each friends as friend}
			<LabFriendCard {friend} onToggle={toggleFavourite} />
		{/each}
			</ul>
	</ul>
</section>

<style>
	h2 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}
</style>
