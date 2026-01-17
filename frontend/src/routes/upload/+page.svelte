<script lang="ts">

    import { submissions } from '../../lib/stores/submissions.ts';

    let title: string = "";
    let description: string = "";
    let url: string = "";

    let thumbnail: File | null = null;
    let preview: string | null = null;

    function handleFile(e: Event) {
        const input = e.target as HTMLInputElement;
        if (!input.files) return;

        thumbnail = input.files[0];

        if (thumbnail) {
            preview = URL.createObjectURL(thumbnail);
        }
    }

  function handleSubmit() {
    submissions.update(list => [
      ...list,
      {
        id: crypto.randomUUID(),
        title,
        description,
        url,
        thumbnail,
        status: "pending"
      }
    ]);

    alert("Submitted for review!");

    title = "";
    description = "";
    url = "";
    thumbnail = null;
    preview = null;
  }

</script>


<h1> Upload Your Game! </h1>

<form on:submit|preventDefault={handleSubmit} class="upload-form">
    <label>
        Game Title:
        <input type="text" bind:value={title} required />
    </label>

    <label>
        Description:
        <textarea bind:value={description} required></textarea>
    </label>

    <label>
        Game URL:
        <input type="url" bind:value={url} required />
    </label>

    <label>
        Thumbnail Image:
        <input type="file" accept="image/*" on:change={handleFile} required />
        {#if preview}
            <img src={preview} alt="Thumbnail Preview" width="100" />
        {/if}
        
    </label>

    <button type="submit">Upload Game</button>
</form>

<style>
    h1 {
        text-align: center;
        color: aliceblue;
    }

    .upload-form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 2rem auto;
        padding: 1rem;
        background-color: #2c2c2c;
        border-radius: 8px;
    }

    label {
        margin-bottom: 1rem;
        color: aliceblue;
    }

    input, textarea {
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    button {
        padding: 0.7rem;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #45a049;
    }
</style>