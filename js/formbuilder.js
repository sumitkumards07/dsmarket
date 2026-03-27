document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("sk-form")) {
    const script = document.createElement("script");
    script.src = document.querySelector('.skformscript').getAttribute('data-src');
    script.type = "text/javascript";
    document.body.appendChild(script);
  }
});