export function renderCardWrapper() {
  const markup = `
<div class="cards-wrapper">
    <div class="container p-0 pt-5">
        <div class="row" id="wrapper"></div>
    </div>
</div>`;

  document.querySelector("#row").insertAdjacentHTML("beforeend", markup);
}

export function renderCardListWrapper() {
  const markup = `
            <div class="panels-wrapper">
                <div class="container p-0" >
                    <div class="panels-filter">
                        <div
                            class="panels-filter__element"
                            style="width: 120px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Артикул
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 160px;"
                        >
                            <div class="panels-filter__name">ЖК</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Корпус
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Этаж
                            </div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 70px;"
                        >
                            <div class="panels-filter__name">Комнат</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 80px;"
                        >
                            <div class="panels-filter__name">Площадь</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name">м2</div>
                        </div>
                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name">Стоимость</div>
                        </div>

                        <div
                            class="panels-filter__element"
                            style="width: 100px;"
                        >
                            <div class="panels-filter__name no-filter">
                                Избранное
                            </div>
                        </div>
                    </div>
                    <div id="wrapper"></div>
                </div>
            </div>`;

  document.querySelector("#row").insertAdjacentHTML("beforeend", markup);
}

export function renderCard(card, isFav) {
  const markup = `
            <article class="col-md-4" data>
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
            </article>`;

  document.querySelector("#wrapper").insertAdjacentHTML("beforeend", markup);
}

export function renderCardList(card, isFav) {
  const markup = `
                    <a href="#/item/${card.id}" class="panel" data-id=${
    card.id
  }>
                        <div class="panel__artikul">${card.scu}</div>
                        <div class="panel__name">
                            <div>ЖК ${card.complex_name}</div>
                        </div>
                        <div class="panel__block">15</div>
                        <div class="panel__floor">${card.floor}</div>
                        <div class="panel__rooms">${card.rooms}</div>
                        <div class="panel__sq">${card.square} м2</div>
                        <div class="panel__price-per-m">${
                          card.price_sq_m
                        } ₽</div>
                        <div class="panel__price">${card.price_total} ₽</div>
                        <div class="panel__favourite">
                            <div class="panel__favourite-btn ${
                              isFav ? "panel__favourite-btn--active" : ""
                            }">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </a>`;

  document.querySelector("#wrapper").insertAdjacentHTML("beforeend", markup);
}

export function deleteEverything() {
  document.querySelector("#row").innerHTML = "";
}

export function toggleFavIcon(elemIcon, isFav) {
  if (isFav) {
    elemIcon.classList.add("card__like--active");
  } else {
    elemIcon.classList.remove("card__like--active");
  }
}

export function toggleFavIconList(elemIcon, isFav) {
  if (isFav) {
    elemIcon.classList.add("panel__favourite-btn--active");
  } else {
    elemIcon.classList.remove("panel__favourite-btn--active");
  }
}
