export function render() {
  const markup = `
  	<div class="cards-wrapper">
    	<div class="container p-0 pt-5">
        	<div class="row" id="row"></div>
		</div>
	</div>`;

  document
    .querySelector("#viewOptionsWrapper")
    .insertAdjacentHTML("afterend", markup);
}

export function renderCard(card, isFav) {
  const markup = `<article class="col-md-4" data>
				<!-- card -->
				<a href="#/item/${card.id}" class="card" data-id=${card.id}>
                    <div class="card__header">
                        <div class="card__title">ЖК ${card.complex_name}</div>
                        <div class="card__like ${
                          isFav ? "card__like--active" : ""
                        }">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                    <div class="card__img">
                        <img src=${card.image} alt="План квартиры" />
                    </div>
                    <div class="card__desc">
                        <div class="card__price">
                            <div class="card__price-total">${
                              card.price_total
                            } ₽</div>
                            <div class="card__price-per-meter">${
                              card.price_sq_m
                            } ₽/м2</div>
                        </div>
						<!-- card__params params -->
                        <div class="card__params params">
                            <div class="params__item">
                                <div class="params__definition">Комнат</div>
                                <div class="params__value">${card.rooms}</div>
                            </div>
                            <div class="params__item">
                                <div class="params__definition">Площадь</div>
                                <div class="params__value">${card.square}</div>
                            </div>
                        </div>
                    <!-- //card__params params -->
                    </div>
                    <div class="card__footer">
                        <div class="card__art">${card.scu}</div>
                        <div class="card__floor">Этаж ${card.floor} из ${
    card.floors_total
  }</div>
                    </div>
                </a>
                <!-- // card -->
            </article>`;

  document.querySelector("#row").insertAdjacentHTML("beforeend", markup);
}

export function toggleFavIcon(elemIcon, isFav) {
  if (isFav) {
    elemIcon.classList.add("card__like--active");
  } else {
    elemIcon.classList.remove("card__like--active");
  }
}

export function deleteEverything() {
  document.querySelector("#row").innerHTML = "";
}