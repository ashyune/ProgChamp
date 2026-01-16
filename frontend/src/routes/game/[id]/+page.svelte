<script>
    /** @type {{ game: any }} */
    export let data;
    const { game } = data;
    
</script>

<header>
    <h2> {game.title} </h2>
    <a href = "/">
        Back to Home!
    </a>
</header>

<h1> Game {game.id} </h1>
<p> {game.description} </p>

<style>
    header{
        color: aliceblue;
    }
    h1, p{
        color: aliceblue;
    }
    
</style>