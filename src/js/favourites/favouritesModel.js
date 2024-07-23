export class Favourites {
  constructor() {
    this.favs = [];
    this.loadLS();
  }

  addId(id) {
    this.favs.push(id);
    this.saveDate();
  }

  removeId(id) {
    this.favs = this.favs.filter((el) => el !== id);
    this.saveDate();
  }

  isFav(id) {
    return this.favs.includes(id);
  }

  toggleFav(id) {
    this.isFav(id) ? this.removeId(id) : this.addId(id);
  }

  saveDate() {
    localStorage.setItem("favourites", JSON.stringify(this.favs));
  }

  loadLS() {
    const data = localStorage.getItem("favourites");
    if (data) {
      this.favs = JSON.parse(data);
    }
  }
}
