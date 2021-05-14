import Wizard from "./index.js"

const app = new Wizard({
  target: document.body,
  props: {
    name: "Example Wizard",
    pages: [
      {
        id: "123456",
        name: "Here's the page!",
        questions: [
          {
            id: "question1",
            caption: "Here is the first question",
            type: "text",
            help: {
              helpIcon: "?",
              helpText: "No YOU need help. You're just clicking on things I mean come on"
            }
          },
          {
            id: "question2",
            caption: "Here is the second question",
            type: "text",
          },
          {
            id: "questionr2",
            caption: "Third!!",
            type: "text",
            placeholder: "Wommpa wompa dunk dunk",
          },
          {},
        ],
      },
      {
        id: "98765432",
        name: "Page two",
        questions: [
          {
            id: "p2question1",
            caption: "Second page question",
            type: "text",
          },
          {
            id: "p2question2",
            caption: "Second page Q2????",
            type: "text",
          },
          {
            id: "p2question3",
            caption: "Third!! But on second page?",
            type: "text",
          },
        ],
      },
      {
        id: "fudsa89hio",
        name: "Third and final1",
        questions: [
          {
            id: "p3question1",
            caption: "Thiiirrrrd page Firrrrst question",
            type: "text",
          },
          {
            id: "p3question2",
            caption: "Second page Q2???? NO it's THIRD PAGE BOYYYY",
            type: "text",
          },
        ],
      }, {
        id: "he90fwiadnoks",
        name: "just kidding",
        questions: []
      }
    ]
  }
});

export default app;