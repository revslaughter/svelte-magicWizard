<script>
  import Page from "./Page.svelte";
  import SidebarLayout from "./sidebarLayout.svelte";

  export let pages;

  var selected;
  var ix = 0;
  if (pages.length) {
    selected = pages[ix];
  }
</script>

<SidebarLayout
  {ix}
  {pages}
  change={(incoming) => {
    ix = incoming;
    selected = pages[incoming];
  }}
>
  <p class="buttons">
    <button
      disabled={ix === 0}
      on:click={() => {
        ix--;
        selected = pages[ix];
      }}
    >
      &#8592; Previous</button
    >
    <button
      disabled={ix + 1 === pages.length}
      on:click={() => {
        ix++;
        selected = pages[ix];
      }}>Next &#10142;</button
    >
  </p>
  <Page page={selected} questions={selected.questions} />
  {#if ix + 1 === pages.length}
    <div class="buttons"><button>Submit</button></div>
  {/if}

  <p class="buttons">
    <button>Save for later</button>
  </p>
</SidebarLayout>

<style>
  .buttons {
    text-align: center;
  }
</style>
