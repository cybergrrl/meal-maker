const menu = {
  _courses: {
    appetisers: [],
    mains: [],
    desserts: [],
  },
  get appetisers() {
    return this._courses.appetisers;
  },
  set appetisers(appetiser) {
    this._courses.appetisers = appetiser;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(main) {
    this._courses.mains = main;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return {
      appetisers: this.appetisers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal: function () {
    const appetiser = this.getRandomDishFromCourse("appetisers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    //console.log(mains.price)
    const totalPrice = appetiser.price + main.price + dessert.price;
    return `Why don't you try ${appetiser.name} as a starter, followed by ${main.name} for your main meal and top it off with ${dessert.name} as your crowning dessert jewel. This will set you back £${totalPrice}. Don't forget to tip generously!`;
  },
};

menu.addDishToCourse("appetisers", "gin", 5);
menu.addDishToCourse("appetisers", "pate", 6.5);
menu.addDishToCourse("appetisers", "sage wafers", 8);

menu.addDishToCourse("mains", "steak", 18);
menu.addDishToCourse("mains", "poached eggs", 11);
menu.addDishToCourse("mains", "lentil salad", 13);
menu.addDishToCourse("mains", "lasagne", 12);
menu.addDishToCourse("mains", "bratwurst", 13);

menu.addDishToCourse("desserts", "angel cake", 7.5);
menu.addDishToCourse("desserts", "merengue nests", 8.5);
menu.addDishToCourse("desserts", "cheese board", 10);

let meal = menu.generateRandomMeal();
console.log(meal);
