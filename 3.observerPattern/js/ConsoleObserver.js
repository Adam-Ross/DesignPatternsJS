class ConsoleObserver {
  constructor() {
    this.colorHistory = [];
  }

  update(model) {
    this.colorHistory.unshift(model.color);
    const results = [];
    for (let i = 0; i < 5; i++) {
      if (this.colorHistory[i]) {
        results.push(this.colorHistory[i]);
      }
    }
    console.log(results);

    console.log(
      `The color of the model is ${model.color} and the number is ${model.number}`
    );
  }
}
