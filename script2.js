(function () {
  if (window.chatbase) return;

  window.chatbase = function () {
    (window.chatbase.q = window.chatbase.q || []).push(arguments);
  };

  const loadScript = function () {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "MjqC-TicgpZpwVFIhUhtt";  // your bot ID
    document.body.appendChild(script);
  };

  if (document.readyState === "complete") {
    loadScript();
  } else {
    window.addEventListener("load", loadScript);
  }
})();
