<script>
  import Page from "./Page.svelte";

  export let pages;

  var selected;
  var ix = 0;
  if (pages.length) {
    selected = pages[ix];
  }

  let sidebarCollapse = false;
</script>

{#if !sidebarCollapse}
  <div id="pageList">
    <ul>
      {#each pages as p, n (p.id)}
        <li class={n === ix ? "highlight" : ""}><span>{p.name}</span></li>
      {/each}
    </ul>
  </div>
{/if}

<div id="pageContent">
  <button
    id="collapes"
    on:click={() => {
      sidebarCollapse = !sidebarCollapse;
    }}
  >
    {sidebarCollapse ? "+" : "-"}
  </button>
  <p class="buttons">
    <button>Save for later</button>
  </p>
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
</div>

<style>
  .buttons {
    text-align: center;
  }
  #pageList,
  #pageContent {
    height: 100%;
    float: left;
  }
  #pageList {
    width: 30%;
    background-color: lavenderblush;
  }
  #pageList > ul {
    list-style-type: none;
  }
  #pageContent {
    width: 70%;
  }
  #collapes {
    width: 2rem;
    height: 2rem;
  }
  .highlight {
    background-color: burlywood;
  }
</style>
