<script>
    import Deep from './Deep.svelte'
    let {count, increment} = from './shared/sharedState.svelte.js'
</script>

<div>
    <h1> This is the deep component </h1>
    <p>The Value of Count: {count}</p>
    <button on:click={increment}>Increment</button>
</div>
