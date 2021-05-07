<script>
  let defaultQ = {
    id: "question",
    caption: "Here's a question for you",
    type: "text",
    placeholder: "Answer here",
    validation: () => true,
  };
  export let question;
  question = { ...defaultQ, ...question };
</script>

<p>
  <label for={question.id}>{question.caption}</label>
  <input
    id={question.id}
    type={question.type}
    placeholder={question.placeholder}
  />
</p>
