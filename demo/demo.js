/* global hljs */
document.body.addEventListener("click", function(e) {
  if (e.target.tagName === "A") {
    e.preventDefault();
  }
});

function trim(code) {
  let lines = code.split("\n");
  let indentSize = 0;
  for (let i = 0; i < lines.length; i++) {
    let match = lines[i].match(/^[ ]*[^\s]/);
    if (match) {
      indentSize = match[0].length - 1;
      break;
    }
  }
  if (indentSize === 0) {
    return code.trim();
  }
  return lines
    .map(l => l.replace(new RegExp(`^[ ]{${indentSize}}`), ""))
    .join("\n")
    .trim();
}

window.addEventListener("load", function(e) {
  let samples = Array.from(document.querySelectorAll(".sample"));
  samples.forEach(sample => {
    let pre = document.createElement("pre");
    let code = document.createElement("code");
    code.classList.add("html");
    code.innerText = trim(sample.innerHTML);
    pre.appendChild(code);
    sample.parentNode.insertBefore(pre, sample.nextSibling);
    hljs.highlightBlock(code);
  });
});
