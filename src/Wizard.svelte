<script>
  import Page from "./Page.svelte";
  import SidebarLayout from "./sidebarLayout.svelte";

  export let pages = [];
  export let name;

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
  <h1>{name}</h1>
  <span class="buttons" id="btnGroup">
    <button
      disabled={ix === 0}
      on:click={() => {
        ix--;
        selected = pages[ix];
      }}
      style="margin-right: 1%;"
    >
      &#8592; Previous</button
    >
    <button>Save for later</button>
    <button
      style="margin-left: 1%;"
      disabled={ix + 1 === pages.length}
      on:click={() => {
        ix++;
        selected = pages[ix];
      }}>Next &#10142;</button
    >
  </span>
  <Page page={selected} questions={selected.questions} />
  {#if ix + 1 === pages.length}
    <p class="buttons"><button>Submit</button></p>
  {/if}
</SidebarLayout>

<style>
  h1 {
    display: inline;
  }
  .buttons {
    display: inline;
    text-align: center;
  }
  #btnGroup {
    margin-left: 4em;
  }
</style>
