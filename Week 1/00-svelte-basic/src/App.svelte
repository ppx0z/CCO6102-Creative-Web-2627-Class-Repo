<script>
let control = $state(0);
 let count = $state(0);

 function increment() {
   count+= 1;
   console.log('new count value', count);
 }
</script>

<div>
<p> The count is {count}</p>
<button on:click={increment}>Add</button>
</div>