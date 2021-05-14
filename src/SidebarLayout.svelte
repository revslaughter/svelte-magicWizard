<script>
  let sidebarCollapse = false;
  export let pages = [];
  export let ix = 0;
  export let change = () => {};
</script>

<div id="sidebarContainer">
  {#if !sidebarCollapse}
    <div id="pageList">
      <ul>
        {#each pages as p, n (p.id)}
          <li
            on:click={() => {
              change(n);
            }}
            class={n === ix ? "highlight" : ""}
          >
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
</div>

<style>
  #sidebarContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
  }
  #pageList {
    order: 1;
    border-right: black;
  }
  #pageList > ul {
    list-style-type: none;
    padding-right: 1.5rem;
  }
  #pageList > ul > li {
    padding: 0.75rem;
    border-radius: 0.25rem;
  }
  #pageContent {
    flex-grow: 1;
    order: 2;
  }
  #collapes {
    width: 2rem;
    height: 2rem;
    display: block;
  }
  .highlight {
    background-color: lightyellow;
  }
</style>
