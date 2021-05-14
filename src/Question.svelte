<script>
  import HelpButton from "./HelpButton.svelte";

  const defaultQ = {
    id: "question",
    caption: "Here's a question for you",
    type: "text",
    placeholder: "Answer here",
    validation: () => true,
    help: {
      helpIcon: "Need help?",
      helpText: "Quick helpful information, or custom markup even?",
    },
  };
  export let question;
  export let visible = true;
  question = { ...defaultQ, ...question };
</script>

{#if visible}
  <p>
    <label for={question.id}>{question.caption}</label>
    <input
      id={question.id}
      type={question.type}
      placeholder={question.placeholder}
    />
    <HelpButton helpIcon={question.help.helpIcon}>
      <p>
        {question.help.helpText}
      </p>
    </HelpButton>
  </p>
{/if}
