export const elements = {
  openModalBtn: document.getElementsByClassName("button-order"),
  modalWrapper: document.getElementsByClassName("modal-wrapper"),
  modalClose: document.getElementsByClassName("modal__close"),
  form: document.getElementsByClassName("modal__form"),
  favBtn: document.getElementsByClassName("button-favourite"),
};

export function render(card, isFav) {
  const markup = `<div class="container p-0">
                <div class="heading-1">
                    ${card.title}, ${card.square} м2 за ${card.price_total} ₽
                </div>

                <!-- object -->
                <div class="object">
                    <!-- object__photo -->
                    <div class="object__photo">
                        <div class="object__photo-wrapper">
                            <img src=${card.image} alt="" />
                        </div>
                    </div>
                    <!-- // object__photo -->

                    <!-- object__desc -->
                    <div class="object__desc">
                        <div class="object__desc-sector">
                            ЖК ${card.complex_name}
                        </div>

                        <div class="object__desc-name" id="placeForFav">
                            <div class="object__desc-title">
                                ${card.title}, ${card.square} м2
                            </div>
                            <div class="object__desc-art">${card.scu}</div>

                            <button id="favBtn" class="button-favourite ${
                              isFav ? "button-favourite--active" : ""
                            }">
                        <i class="fas fa-heart"></i> <span>${
                          isFav ? "В избранном" : "В избранное"
                        }</span>
                    </button>

                        </div>

                        <div class="object__desc-details">
                            <!-- params -->
                            <div class="params">
                                <div class="params__item">
                                    <div class="params__definition">Корпус</div>
                                    <div class="params__value">${
                                      card.building
                                    }</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Этаж</div>
                                    <div class="params__value">${
                                      card.floor
                                    }</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Номер</div>
                                    <div class="params__value">${
                                      card.flat_number
                                    }</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Комнат</div>
                                    <div class="params__value">${
                                      card.rooms
                                    }</div>
                                </div>
                            </div>
                            <!-- // params -->
                        </div>

                        <div class="details">
                            <div class="details__row">
                                <div class="details__name">Стоимость</div>
                                <div
                                    class="details__value details__value--price"
                                >
                                    ${card.price_total} ₽
                                </div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Цена за м2</div>
                                <div class="details__value">${
                                  card.price_sq_m
                                } ₽/м2</div>
                            </div>
                            <div class="details__row">
                                <div class="details__name">Площадь</div>
                                <div class="details__value">${
                                  card.square
                                } м2</div>
                            </div>
                        </div>

                        <button class="button-order" id="openModal">Забронировать</button>
                        <!-- <button class="button-preview">Записаться на просмотр</button> -->
                    </div>
                    <!-- // object__desc -->
                </div>
                <!-- // object -->
            </div>

            <div class="container">
                <a href="index.html" class="back-to-results"
                    >← Вернуться к результатам поиска</a
                >
            </div>`;

  const markupModal = `<div class="modal-wrapper none">
            <div class="modal">
                <div class="modal__header">
                    <div class="modal__title">
                        Заявка на бронирование
                    </div>
                    <div class="modal__details">
                        Квартира <span>96</span> в ${card.complex_name} Дом ${card.rooms}
                        <div class="modal__details-art">${card.scu}</div>
                    </div>
                </div>

                <form class="modal__form">
                    <div class="modal__form-content">
                        <!-- formgroup -->
                        <div class="formgroup">
                            <label
                                class="modal__form-input-label"
                                for="form-phone"
                            >
                                Имя
                            </label>
                            <input
                                type="text"
                                id="form-name"
                                class="modal__form-input"
                                placeholder="Введите имя"
                            />
                        </div>
                        <!-- // formgroup -->
                        <!-- formgroup -->
                        <div class="formgroup">
                            <label
                                class="modal__form-input-label"
                                for="form-phone"
                            >
                                Телефон
                            </label>
                            <input
                                type="text"
                                id="form-phone"
                                class="modal__form-input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                            />
                        </div>
                        <!-- // formgroup -->

                        <div class="formgroup formgroup--checkbox">
                            <input type="checkbox" id="policy" checked />
                            <label class="policy-text" for="policy"
                                >Я согласен на обработку моих персональных
                                данных. С Политикой в отношении обработки
                                персональных данных ознакомлен и
                                согласен.</label
                            >
                        </div>
                    </div>
                    <input
                        class="modal__submit"
                        type="submit"
                        value="Отправить заявку"
                    />
                </form>
                <button class="modal__close">
                    Закрыть
                </button>
            </div>
        </div>`;

  document.querySelector("#app").insertAdjacentHTML("beforeend", markup);
  document.querySelector("#app").insertAdjacentHTML("beforeend", markupModal);
}

export function showModal() {
  elements.modalWrapper[0].classList.toggle("none");
}

export function getInput() {
  const formData = {};
  formData.name = document.querySelector("#form-name").value;
  formData.phone = document.querySelector("#form-phone").value;

  return formData;
}

export function clearInput() {
  document.querySelector("#form-name").value = "";
  document.querySelector("#form-phone").value = "";
}

export function toggleFavBtn(isFaved) {
  let btn = document.querySelector("#favBtn");
  if (isFaved) {
    btn.classList.add("button-favourite--active");
    btn.querySelector("span").textContent = "В избранном";
  } else {
    btn.classList.remove("button-favourite--active");
    btn.querySelector("span").textContent = "В избранное";
  }
}
