class ElementObserver {
  constructor() {}

  update(model) {
    const elem = document.querySelector(".numberBox");
    elem.textContent = model.number;
  }
}
