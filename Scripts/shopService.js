const UpgradeInfo = {
  "Trick or Treaters": {
    type: "passive",
  },
  "Bowl of Candy": {
    type: "passive",
  },
  "Classic Bag": {
    type: "active",
  },
  "Candy Shop": {
    type: "passive",
  },
  "Candy Factory": {
    type: "passive",
  },
  "Candy Empire": {
    type: "passive",
  },
  "Duffle Bag": {
    type: "active",
  },
  Candyland: {
    type: "active",
  },
};

let passiveIncome = 0;
let perClick = 1;

function getUpgradeInfo(name, amount) {
  // USE AMOUNT TO GIVE HOW MUCH IS REQUIRED
  //   console.log(name, amount);
  let selectedType = UpgradeInfo[name].type;

  if (selectedType === "passive") {
    passiveIncome += amount * currentMultiplier;
    // go give them uhh stat per sec
  } else {
    perClick += amount * currentMultiplier;
    // go give them more clicks per click
  }
}

function givePassiveClicks() {
  setInterval(() => {
    totalClicks += passiveIncome;
    clickLabel.textContent = "Clicks: " + totalClicks.toFixed(2);
  }, 1000);
}

givePassiveClicks();
