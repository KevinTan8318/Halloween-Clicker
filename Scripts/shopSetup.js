const shopButtons = document.getElementsByClassName("buy-btn");
const productCards = document.getElementsByClassName("product-card");

function shopButtonColors() {
  for (let i = 0; i < shopButtons.length; i++) {
    let button = shopButtons[i];
    let price = button.price;

    if (totalClicks >= price) {
      colorFunction(button, true);
    } else {
      colorFunction(button, false);
    }
  }
}

function connectButtons() {
  for (let i = 0; i < shopButtons.length; i++) {
    let button = shopButtons[i];

    button.addEventListener("click", function () {
      let price = button.price;
      let effect = button.effect;
      let Name = button.Name;
      if (totalClicks >= price) {
        // console.log(price);
        // console.log(effect);
        // console.log(Name);
        totalClicks -= price;
        getUpgradeInfo(Name, effect);
        shopButtonColors();
      }

      if (totalClicks > button.price) {
        colorFunction(button, true);
      } else {
        colorFunction(button, false);
      }
    });
  }
}

function colorFunction(button, status) {
  if (status) {
    button.style.backgroundColor = "#63ec69";
    button.style.boxShadow = "0px 10px #47b44d";
    button.textContent = "Buy";
  } else {
    button.style.backgroundColor = "#f03232";
    button.style.boxShadow = "0px 10px #c22929";
    button.textContent = "Locked";
  }
}

function setPrices() {
  function stringToNumber(str) {
    let num = parseFloat(str.match(/[+-]?\d+(\.\d+)?/)[0]);
    return num;
  }
  // get all values and set them into the button (price + effect)
  for (let i = 0; i < productCards.length; i++) {
    let Card = productCards[i];
    let button = Card.querySelectorAll("button")[0];
    let cost = Card.querySelectorAll("p")[0];
    let effect = Card.querySelectorAll("p")[1];
    let name = Card.querySelector("h3").textContent;

    cost = stringToNumber(cost.textContent);
    effect = stringToNumber(effect.textContent);

    button.price = cost;
    button.effect = effect;
    button.Name = name;
  }
}

setPrices();
connectButtons();
