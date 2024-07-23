import * as view from "./view";
import getParams from "./model";

async function controller(state) {
  if (!state.filter) {
    state.filter = new getParams();
  }

  await state.filter.getParams();
  await state.filter.getResults();
  state.results = state.filter.items;

  view.render(state.filter.params);
  view.changeButtonText(state.filter.items.length);

  // прослушка событий формы
  const form = document.querySelector("#form");


  form.addEventListener("change", async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();

    state.results = state.filter.items;

    view.changeButtonText(state.filter.items.length);
  });

  form.addEventListener("reset", async function () {
    state.filter.query = "";
    await state.filter.getResults();
    state.results = state.filter.items;
    view.changeButtonText(state.filter.items.length);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    state.emitter.emit("event:render-listing", {});
  });
}

export { controller };
