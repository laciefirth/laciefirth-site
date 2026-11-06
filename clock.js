// Live Toronto time in the footer, e.g. "08:09:25 EST"
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  function tick() {
    el.textContent = new Date().toLocaleTimeString("en-CA", {
      timeZone: "America/Toronto", hour12: false,
      hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short"
    });
  }
  tick();
  setInterval(tick, 1000);
})();
