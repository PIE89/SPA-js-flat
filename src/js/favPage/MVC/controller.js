import * as view from "./view";
import getFavs from "./model";

async function controller(state) {
  if (!state.favsArr) {
    state.favsArr = new getFavs();
  }

  view.render();

  await state.favsArr.getItems(state.favourites.favs);
  let favsResult = state.favsArr.favsArr;

  if (favsResult !== 0) {
    favsResult.forEach((el) => {
      view.renderCard(el, state.favourites.isFav(el.id));
    });
  }

  addToFavListener();

  function addToFavListener() {
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
  }

  state.emitter.subscribe("event:filtered-by-price-square", (flag) => {
    switch (flag.flag) {
      case "priceASC":
        state.favsArr.filterByPriceASC();
        break;

      case "priceDESC":
        state.favsArr.filterByPriceDESC();
        break;

      case "squareASC":
        state.favsArr.filterBySquareASC();
        break;

      case "squareDESC":
        state.favsArr.filterBySquareDESC();
        break;

      default:
        break;
    }

    view.deleteEverything();

    state.favsArr.favsArr.forEach((el) => {
      view.renderCard(el, state.favourites.isFav(el.id));
    });

    addToFavListener();
  });
}

export { controller };
