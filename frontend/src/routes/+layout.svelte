<script>
    import '../app.css'
    import { user } from '$lib/stores/user.js';
</script>

<header>
    <a href = "/">
        <h1> Progchamp! </h1>
    </a>

     <nav>
        <a href="/">Home</a>

        {#if $user.role === "dev"}
            | <a href="/upload">Upload</a>
        {/if}

        {#if $user.role === "admin"}
            | <a href="/admin">Admin</a>
        {/if}
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <small>© ACM PESUECC ?</small>
</footer>

<style>

	main {
        justify-content: center;
    	text-align: center;
        padding-top: 0.5rem;
	}

	header {
        text-align: center;
        margin:0%;
		color: #ff006f;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

    a{
        text-decoration: none;
        transition: transform 0.15s ease;

    }
    a:link{
		color: #ff006f;
    }
    
    a:visited{
		color: #ff006f;
    }

    a:hover{
		color: #ca1261;
        text-shadow: #2e4186;
        transform: translateY(-4px);
    }

    footer {
        font-size: large;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        position: relative;
        color: rgb(67, 108, 255);
    }
</style>