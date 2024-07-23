import "url-search-params-polyfill";

const elements = {
  selectComplex: document.getElementsByClassName("filter__dropdown"),
  selectRooms: document.getElementsByClassName("rooms__checkbox"),
  selectFields: document.getElementsByClassName("range__input"),
  selectBtn: document.getElementsByClassName("filter__show"),
};

export function render(state) {
  let roomValue = "";
  state.roomValues.forEach((res) => {
    roomValue += `<input
        name="rooms"
        type="checkbox"
        id="rooms_${res}"
        class="rooms__checkbox"
        value=${res}
        />
    <label for="rooms_${res}" class="rooms__btn">${res}</label>`;
  });

  let complexNames = "";
  state.complexNames.forEach((res) => {
    complexNames += `<option value=${res}>${res}</option>`;
  });

  const markup = `<form method="GET" id="form" class="container p-0">
                <div class="heading-1">Выбор квартир:</div>
                <div class="filter">
                    <div class="filter__col">
                        <div class="filter__label">Выбор проекта:</div>
                        <select name="complex" class="filter__dropdown">
                            <option value="all">Все проекты</option>
                            ${complexNames}
                        </select>
                    </div>
                    <div class="filter__col rooms">
                        <div class="filter__label">Комнат:</div>
                        <div class="rooms__wrapper">
                            ${roomValue}
                        </div>
                    </div>
                    <div class="filter__col">
                        <div class="filter__label">Площадь:</div>
                        <div class="range__wrapper">
                            <label class="range">
                                <div for="" class="range__label">от</div>
                                <input
                                    name="sqmin"
                                    min="0"
                                    type="number"
                                    class="range__input"
                                    placeholder=${state.squareMin}
                                    value=${state.squareMin}
                                />
                                <div class="range__value">м2</div>
                            </label>
                            <label class="range">
                                <div for="" class="range__label">до</div>
                                <input
                                    name="sqmax"
                                    min="0"
                                    type="number"
                                    class="range__input"
                                    placeholder=${state.squareMax}
                                    value=${state.squareMax}
                                />
                                <div class="range__value">м2</div>
                            </label>
                        </div>
                    </div>
                    <div class="filter__col">
                        <div class="filter__label">Стоимость:</div>
                        <div class="range__wrapper">
                            <div class="range">
                                <label for="" class="range__label">от</label>
                                <input
                                    type="number"
                                    name="pricemin"
                                    min="0"
                                    class="range__input range__input--price"
                                    placeholder=${state.priceMin}
                                    value=${state.priceMin}
                                />
                                <div class="range__value">₽</div>
                            </div>
                            <div class="range">
                                <label for="" class="range__label">до</label>
                                <input
                                    type="number"
                                    name="pricemax"
                                    min="0"
                                    class="range__input range__input--price"
                                    placeholder=${state.priceMax}
                                    value=${state.priceMax}
                                />
                                <div class="range__value">₽</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter__buttons">
                    <button class="filter__show" type="submit">Показать объекты</button>
                    <button class="filter__reset" type="reset">Сбросить фильтр</button>
                </div>
            </form>`;

  document.querySelector("#app").insertAdjacentHTML("beforeend", markup);
}

export function changeButtonText(allObjects) {
  if (allObjects === 0) {
    elements.selectBtn[0].innerText = `C данными параметрами объектов нет`;
    elements.selectBtn[0].disabled = true;
  } else {
    elements.selectBtn[0].innerText = `Показать ${allObjects} объектов`;
    elements.selectBtn[0].disabled = false;
  }
}

export function getInput() {
  const searchParams = new URLSearchParams();

  if (elements.selectComplex[0].value !== "all") {
    searchParams.append(
      elements.selectComplex[0].name,
      elements.selectComplex[0].value
    );
  }

  const roomsValues = [];
  Array.from(elements.selectRooms).forEach((checkbox) => {
    if (checkbox.value !== "" && checkbox.checked) {
      roomsValues.push(checkbox.value);
    }
  });

  const roomsValuesString = roomsValues.join(",");

  if (roomsValuesString !== "") {
    searchParams.append("rooms", roomsValuesString);
  }

  if (elements.selectFields) {
    Array.from(elements.selectFields).forEach((select) => {
      if (select.value !== "") {
        searchParams.append(select.name, select.value);
      }
    });
  }

  const queryString = searchParams.toString();

  if (queryString) {
    return "?" + queryString;
    s;
  } else {
    ("");
  }
}
