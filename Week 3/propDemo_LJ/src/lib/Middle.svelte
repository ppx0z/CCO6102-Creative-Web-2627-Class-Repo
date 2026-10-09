<script>
    let {count, increment} = $props()
</script>

<div>
    <h1> This is the middle component </h1>
    <deep {count} {increment}/>
</div>