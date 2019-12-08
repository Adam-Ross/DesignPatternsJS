class NumberModel {
  constructor() {
    this.number = 0;
    this.color = "black";
    this.observers = [];
  }

  increment() {
    this.number++;
    const colors = ["red", "green", "blue", "aqua"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    this.color = newColor;

    this.notifyObservers();
  }

  addObserver(o) {
    this.observers.push(o);
  }

  notifyObservers() {
    for (let o of this.observers) {
      o.update(this);
    }
  }
}
