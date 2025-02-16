function copyCode(button) {
    const codeElement = button.parentElement.nextElementSibling.querySelector("code");
    const textArea = document.createElement("textarea");
    textArea.value = codeElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}