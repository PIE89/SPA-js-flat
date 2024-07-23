export default class getParams {
  constructor() {
    this.query = "";
  }

  async getParams() {
    try {
      const queryString = "https://jsproject.webcademy.ru/itemsinfo";
      const response = await fetch(queryString);
      const result = await response.json();
      this.params = await result;
    } catch (error) {
      alert(error);
    }
  }

  async getResults() {
    try {
      const response = await fetch(
        `https://jsproject.webcademy.ru/items${this.query}`
      );
      const result = await response.json();
      this.items = await result;
    } catch (error) {
      alert(error);
    }
  }
}
