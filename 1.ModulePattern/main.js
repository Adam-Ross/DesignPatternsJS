// Standard module pattern

// First, make consts for document.
const textBtn = document.querySelector("#textBtn");
// Create iffe
const ui = (function() {
  // Create private variable
  const newText = "Hello From Iffe";
  // Create Private function
  function changeText() {
    const oldText = document.querySelector("#text");
    oldText.textContent = newText;
  }

  // Return public functions that point to private functions
  return {
    // Right here, we're pointing to the private function. This is different from the revealing pattern.
    callChangeText: function() {
      changeText();
    }
  };
})();

textBtn.addEventListener("click", ui.callChangeText);

// Revealing module pattern
const controller = (function() {
  const data = [];

  function add(item) {
    data.push(item);
  }

  function get(num) {
    return data.find(elem => {
      return elem.id === num;
    });
  }

  function show() {
    console.log(data);
  }

  return {
    add: add,
    get: get,
    show: show
  };
})();

controller.add({ name: "Mike", id: 1 });
controller.add({ name: "John", id: 2 });
controller.add({ name: "Steve", id: 45 });
controller.add({ name: "Hank", id: 62 });
console.log(controller.get(62));

controller.show();
