let confirmRebirth = document.getElementById("confirm-rebirth");

let currentMultiplier = 1;

confirmRebirth.addEventListener("click", function () {
  if (totalClicks >= 1000000) {
    console.log("Resetting");
    currentMultiplier += 0.25;
    passiveIncome = 0;
    perClick = 1;
    totalClicks = 0;

    toggleShop(rebirthContainer);

    /// give them +0.25 multiplier
    //reset them
  }
});
