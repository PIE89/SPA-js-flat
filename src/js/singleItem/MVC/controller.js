import * as model from "./model";
import * as view from "./view";

async function controller(state) {
  state.result = await model.getData(state.routeParams);

  view.render(state.result, state.favourites.isFav(state.result.id));

  //   Блок с модалкой

  view.elements.openModalBtn[0].addEventListener("click", function () {
    view.showModal();
  });

  view.elements.modalClose[0].addEventListener("click", function () {
    view.showModal();
  });

  view.elements.modalWrapper[0].addEventListener("click", function (e) {
    if (e.target.closest(".modal")) {
      return null;
    } else {
      view.showModal();
    }
  });

  view.elements.form[0].addEventListener("submit", async function (e) {
    e.preventDefault();
    const fromData = view.getInput();

    let result = await model.submitForm(fromData);

    if ((await result.message) === "Bid Created") {
      alert("Заявка успешно добавлена");
    } else if ((await result.message) === "Bid Not Created") {
      result.errors.forEach((err) => {
        alert(err);
      });
    }

    view.clearInput();

    view.showModal();
  });

  view.elements.favBtn[0].addEventListener("click", function (e) {
    state.favourites.toggleFav(state.result.id);
    view.toggleFavBtn(state.favourites.isFav(state.result.id));
  });
}

export { controller };
