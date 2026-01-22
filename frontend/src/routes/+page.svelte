<script lang="ts">
    import GameCard from '$lib/components/GameCard.svelte';
    import {games} from '$lib/data/games.js';
    
    let query = '';
    let selectedTags: Set<string> = new Set();

    $: filteredGames = games.filter(game => {
        //search bar 
        const matchesQuery =    
            game.title.toLowerCase().includes(query.toLowerCase()) ||
            game.description.toLowerCase().includes(query.toLowerCase());
        //tag filters    
        const matchesTags = 
            selectedTags.size === 0 ||
            [...selectedTags].every(tag => game.tags.includes(tag));

            return matchesQuery && matchesTags;
    }
    );

    const allTags = [...new Set(games.flatMap(g => g.tags))];

    //toggling the filter tags
    function toggleTag(tag: string) {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
        }
        else {
            selectedTags.add(tag);
        }

        selectedTags = new Set(selectedTags);
    }

</script>

<h1> Games! </h1>
<br> <p> Play games made by others :3 </p>

<input 
    class = "search-bar"
    type="text"
    placeholder="Search for your favourite games 0o0..."
    bind:value={query}
/>

<div class = "tag-filters">
    {#each allTags as tag}
        <button
            class:selected = {selectedTags.has(tag)}
            on:click = {() => toggleTag(tag)}
        >
            #{tag} 
        </button>
    {/each}
</div>

<div class = 'grid'>
    {#each filteredGames as game}
        <GameCard {game} />

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
        width: min(750px, 90%);
        padding: 0.6rem 1rem;
        border-radius: 8px;
        border: none;
        font-size: 1rem;
    }

    .tag-filters {
        display: block;
        width: min(750px, 90%);
        margin: 1rem auto;
        padding: 0.6rem 1rem;
        border: 1px solid;
        border-radius: 8px;
        border-color: cyan;
    }

    .tag-filters button{
        padding: 0.5rem;
        margin-right: 0.5rem;
        background-color: rgb(31, 56, 57);
        color: aliceblue;
        border: 1px solid;
        border-radius: 8px;
        border-color: cyan;
        

    }

    .grid{
        margin: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;

    }
</style>
