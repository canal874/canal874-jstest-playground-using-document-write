/**
 * JS Playground implementation using eval in iframe
 */

function run() {
  const code = document.getElementById("code").value;
  const html = `<!DOCTYPE html>
  <html>
    <head></head>
    <body>
    ${code}
    </body>
  </html>`;

  const previewFrame = document.getElementById("previewFrame").contentWindow;
  previewFrame.postMessage({ command: "overwrite", arg: html }, "*");
}

function say(txt) {
  const mes = document.createTextNode(txt);
  document.body.appendChild(mes);
}
