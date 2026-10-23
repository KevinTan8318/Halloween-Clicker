const clickLabel = document.getElementById("clickLabel");
const clickBtn = document.getElementById("clickBtn");
const shopBtn = document.getElementById("shopBtn");
const rebirthBtn = document.getElementById("rebirthBtn");

const rebirthContainer = document.getElementById("rebirthContainer");
const shopContainer = document.getElementById("container");
const clickDiv = document.getElementById("clickDiv");

clickBtn.addEventListener("click", giveClicks);
shopBtn.addEventListener("click", () => toggleShop(shopContainer));
rebirthBtn.addEventListener("click", () => toggleShop(rebirthContainer));

let data = [];

let playerStats = {
  coins: 0,
  inventory: ["Wooden Sword"],
};
let totalClicks = 0;
let shopStatus = "closed";
let shopOpened = false;

function giveClicks() {
  totalClicks += perClick * currentMultiplier;
  clickLabel.textContent = "Clicks: " + totalClicks.toFixed(2);
}

clickLabel.addEventListener("change", (event) => {
  console.log("Value changed to:", event.target.value);
});

function toggleShop(containerElement) {
  if (shopStatus === "closed") {
    containerElement.style.display = "inline";
    clickDiv.style.display = "none";
    shopStatus = "opened";
    shopButtonColors();

    if (totalClicks >= 1000000) {
      colorFunction(confirmRebirth, true);
    } else {
      colorFunction(confirmRebirth, false);
    }
  } else {
    containerElement.style.display = "none";
    clickDiv.style.display = "inline";
    shopStatus = "closed";
    clickLabel.textContent = "Clicks: " + totalClicks.toFixed(2);
  }
}

function init() {
  shopContainer.style.display = "none"; // default is inline
  rebirthContainer.style.display = "none";
}

init();
