var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.getAttribute("data-state") === "hidden") {
    element.textContent = element.getAttribute("data-number");
    element.setAttribute("data-state", "visible");
  } else if (element.getAttribute("data-state") === "visible") {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }
});
