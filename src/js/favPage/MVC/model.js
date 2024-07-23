export default class getFavs {
  constructor() {
    this.favsArr = [];
  }

  async getItems(arr) {
    if (arr.length !== 0) {
      let ids = arr.join(",");
      try {
        const queryString = "https://jsproject.webcademy.ru/items?ids=";
        const response = await fetch(`${queryString}${ids}`);
        const result = await response.json();
        this.favsArr = result;
      } catch (err) {
        alert(err);
      }
    } else {
      this.favsArr = [];
    }
  }

  filterByPriceASC() {
    this.favsArr.sort((a, b) => {
      return +a.price_total - +b.price_total;
    });
  }

  filterByPriceDESC() {
    this.favsArr.sort((a, b) => {
      return +b.price_total - +a.price_total;
    });
  }

  filterBySquareASC() {
    this.favsArr.sort((a, b) => {
      return +a.square - +b.square;
    });
  }

  filterBySquareDESC() {
    this.favsArr.sort((a, b) => {
      return +b.square - +a.square;
    });
  }
}
