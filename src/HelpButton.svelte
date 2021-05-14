<script>
  export let helpIcon = "Help?";
  export let helpText = "Here is helpful information";
  export let direction = "right";
</script>

<span>
  <details data-direction={direction}>
    <summary>{helpIcon}</summary>
    <div class="showRight">
      <slot>
        <p>
          {helpText}
        </p>
      </slot>
    </div>
  </details>
</span>

<style>
  /* Hide marker */
  details[data-direction] > summary:focus {
    outline: none;
  }
  details[data-direction] > summary::-webkit-details-marker {
    display: none;
  }
  details[data-direction] > summary {
    list-style: none;
  }
  details[data-direction] {
    position: relative;
  }
  details[data-direction] > summary + * {
    position: absolute;
  }
  .showRight {
    left: calc(1rem + 100%);
    bottom: 50%;
    transform: translateY(50%);
    display: block;
    padding: 0.75rem;
    z-index: 1;
    border: solid 1px black;
    border-radius: 0.5rem;
    background: white;
    width: 24em;
  }
  details {
    display: inline;
  }
  summary {
    font-size: x-small;
  }
</style>
