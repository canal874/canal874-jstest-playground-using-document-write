window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (!event.data.command) {
    return;
  }
  if (event.data.command === "overwrite" && event.data.arg !== undefined) {
    document.write(event.data.arg);
  }
}

function say(txt) {
  const mes = document.createTextNode(txt);
  document.body.appendChild(mes);
  document.body.appendChild(document.createElement("br"));
}
