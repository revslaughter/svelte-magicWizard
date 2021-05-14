<script>
  let sidebarCollapse = false;
  export let pages = [];
  export let ix = 0;
  export let change = () => {};
</script>

{#if !sidebarCollapse}
  <div id="pageList">
    <ul>
      {#each pages as p, n (p.id)}
        <li on:click={() => {change(n)}} class={n === ix ? "highlight" : ""}>
          <span>{p.name}</span>
        </li>
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
  <slot />
</div>

<style>
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
