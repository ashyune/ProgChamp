<script lang="ts">
  import { submissions } from '../../lib/stores/submissions.ts';
  import { user } from '$lib/stores/user.js';
</script>

<h1>My Games</h1>

{#if $submissions.filter(g => g.dev === $user.name).length === 0}
  <p>submit some gaaaaaaaaaaames</p>
{:else}
  <div class="list">
    {#each $submissions.filter(g => g.dev === $user.name) as game}
      <div class="card">
        <strong>{game.title}</strong>
        <p>{game.description}</p>
        <span class="status {game.status}">
          {game.status}
        </span>
      </div>
    {/each}
  </div>
{/if}

<style>
  h1, p {
    text-align: center;
    color: white;
  }

  .list {
    max-width: 700px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    background: #15152a;
    border: 1px solid #333;
    padding: 1rem;
    border-radius: 10px;
  }

  .status {
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .pending { background: #444; }
  .approved { background: #134e4a; color: #5eead4; }
  .rejected { background: #3f1d1d; color: #f87171; } /* could change these they look bleh */
</style>
