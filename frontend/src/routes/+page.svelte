<script>
    import GameCard from '$lib/components/GameCard.svelte';
    import {games} from '$lib/data/games.js';
    
    let query = '';

    $: filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(query.toLowerCase())||game.description.toLowerCase().includes(query.toLowerCase())
    );
</script>

<h1> Games! </h1>
<br> <p> Play games made by others :3 </p>

<input 
    class = "search-bar"
    type="text"
    placeholder="Search for your favourite games 0o0..."
    bind:value={query}
/>

<div class = 'grid'>
    {#each filteredGames as game}
        <GameCard 
            id = {game.id} 
            title = {game.title} 
            description = {game.description} 
            thumbnail = {game.thumbnail} 
            url = {game.url} 
        />
    {/each}
</div>

<style>
    h1 {
        justify-content: center;
        text-align: center;
        color:aliceblue;
        margin-top: 0;
        padding: 0%;
    }

    p{
        text-align: center;
        color: aliceblue;
    }

      .search-bar {
        display: block;
        margin: 1rem auto;
        width: min(500px, 90%);
        padding: 0.6rem 1rem;
        border-radius: 8px;
        border: none;
        font-size: 1rem;
    }
    .grid{
        margin: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;

    }
</style>
