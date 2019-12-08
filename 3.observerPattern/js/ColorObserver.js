class ColorObserver {
  constructor() {}

  update(model) {
    const color = document.querySelector(".numberBox");
    color.style.backgroundColor = `${model.color}`;
  }
}
