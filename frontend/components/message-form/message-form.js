import { sendMessage } from "client/chat";
import "./message-form.css";

function submitMessage(input) {
  sendMessage(input.value);

  input.value = "";
  input.focus();
}

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  input.addEventListener("keydown", event => {
    if (event.keyCode === 13 && event.metaKey) {
      event.preventDefault();
      submitMessage(input);
    }
  });

  submit.addEventListener("click", event => {
    event.preventDefault();
    submitMessage(input);
  });
}
