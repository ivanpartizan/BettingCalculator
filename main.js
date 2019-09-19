// Calculate Your Winnings
const odds = document.querySelector("#odds");
const stake = document.querySelector("#stake");
const returnOutput = document.querySelector("#returnOutput");
const profitOutput = document.querySelector("#profitOutput");

document.querySelector("#output1").style.display = "none";
document.querySelector("#output2").style.display = "none";

const winnings = document.querySelector("#winningsForm");
winnings.addEventListener("submit", calculateWinnings);

function calculateWinnings(e) {
  returnOutput.innerHTML = (odds.value * stake.value).toFixed(2);
  profitOutput.innerHTML = (odds.value * stake.value - stake.value).toFixed(2);
  e.preventDefault();
  document.querySelector("#output1").style.display = "block";
  document.querySelector("#output2").style.display = "block";
}

// Calculate Fair Odds
const probability = document.querySelector("#probability");
const fairOdds = document.querySelector("#fairOdds");

document.querySelector("#output3").style.display = "none";

probability.addEventListener("keyup", calculateOdds);

function calculateOdds() {
  fairOdds.innerHTML = (100 / probability.value).toFixed(3);
  document.querySelector("#output3").style.display = "block";
}
