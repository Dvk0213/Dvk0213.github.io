document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".jog-item").forEach(function (item) {
    var trigger = item.querySelector(".jog-problem");
    var solution = item.querySelector(".jog-solution");
    var hint = trigger && trigger.querySelector(".jog-hint");
    if (!trigger || !solution) return;

    function toggle() {
      var revealed = trigger.classList.contains("is-revealed");

      if (revealed) {
        solution.hidden = true;
        trigger.classList.remove("is-revealed");
        trigger.setAttribute("aria-expanded", "false");
        if (hint) hint.textContent = "Click to reveal solution";
      } else {
        solution.hidden = false;
        trigger.classList.add("is-revealed");
        trigger.setAttribute("aria-expanded", "true");
        if (hint) hint.textContent = "Click to hide solution";
      }
    }

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
});
