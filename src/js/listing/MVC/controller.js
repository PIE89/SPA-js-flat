import * as view from "./view";
import * as model from "./model";

function controller(state) {
  view.renderCardWrapper();
  state.results.forEach((card) =>
    view.renderCard(card, state.favourites.isFav(card.id))
  );

  addToFavListener();

  // подписка события изменения фильтра по параметрам (ЖК, команты, площадь и цена)
  state.emitter.subscribe("event:render-listing", () => {
    view.deleteEverything();

    if (state.displayFormat === "cards") {
      view.renderCardWrapper();

      state.results.forEach((card) =>
        view.renderCard(card, state.favourites.isFav(card.id))
      );

      addToFavListener();
    } else if (state.displayFormat === "list") {
      view.renderCardListWrapper();

      state.results.forEach((card) =>
        view.renderCardList(card, state.favourites.isFav(card.id))
      );

      addToFavListener();
    }
  });

  // прослушка события в избранное (работа иконок)
  function addToFavListener() {
    if (state.displayFormat == "cards") {
      Array.from(document.getElementsByClassName("card__like")).forEach(
        (item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            const currentId = e.target.closest(".card").dataset.id;

            state.favourites.toggleFav(currentId);

            view.toggleFavIcon(
              e.target.closest(".card__like"),
              state.favourites.isFav(currentId)
            );
          });
        }
      );
    } else if (state.displayFormat === "list") {
      Array.from(
        document.getElementsByClassName("panel__favourite-btn")
      ).forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const currentId = e.target.closest(".panel").dataset.id;

          state.favourites.toggleFav(currentId);

          view.toggleFavIconList(
            e.target.closest(".panel__favourite-btn"),
            state.favourites.isFav(currentId)
          );
        });
      });
    }
  }

  // Рендер карточек после изменений
  function renderCardAfterChanges() {
    view.deleteEverything();

    if (state.displayFormat === "cards") {
      view.renderCardWrapper();

      state.results.forEach((card) =>
        view.renderCard(card, state.favourites.isFav(card.id))
      );

      addToFavListener();
    } else if (state.displayFormat === "list") {
      view.renderCardListWrapper();

      state.results.forEach((card) =>
        view.renderCardList(card, state.favourites.isFav(card.id))
      );

      addToFavListener();
    }
  }

  // подписка события отображения карточек (list or card)
  state.emitter.subscribe("event:display-card-or-listing", (displayType) => {
    state.displayFormat = displayType.displayType;

    renderCardAfterChanges();
  });

  // подписка события изменения фильтра цены и площади кв
  state.emitter.subscribe("event:filtered-by-price-square", (flag) => {
    view.deleteEverything();

    switch (flag.flag) {
      case "priceASC":
        model.filterByPriceASC(state.results);
        break;

      case "priceDESC":
        model.filterByPriceDESC(state.results);
        break;

      case "squareASC":
        model.filterBySquareASC(state.results);
        break;

      case "squareDESC":
        model.filterBySquareDESC(state.results);
        break;

      default:
        break;
    }

    addToFavListener();
    renderCardAfterChanges();
  });
}

export { controller };
