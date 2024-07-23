import * as view from "./view";

const controller = (state) => {
  view.render();

  const btns = document.querySelectorAll(".view-options__radio");

  btns.forEach((btn) => {
    btn.removeAttribute("checked");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.checked = true;
      let displayType = e.target.value;
      state.emitter.emit("event:display-card-or-listing", { displayType });
    });
  });

  document.querySelector("#sort-cards-by").addEventListener("change", (e) => {
    e.preventDefault();

    let flag = e.target.value;

    state.emitter.emit("event:filtered-by-price-square", { flag });
  });
};

export { controller };
