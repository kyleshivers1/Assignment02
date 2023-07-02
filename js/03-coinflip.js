let randomNum = Math.round(Math.random());
let choice = prompt(`Heads or Tails?`);

randomNum >= 500 ? (result = `Tails`) : (result = `Heads`);

if (result === `Heads` && choice === `Heads`) {
  document.write(`The flip was heads and you chose heads...you win!`);
} else if (result === `Tails` && choice === `Tails`) {
  document.write(`The flip was tails and you chose tails...you win!`);
} else if (result === "Heads" && choice === `Tails`) {
  document.write(`The flip was heads but you chose tails...you lose!`);
} else if (result === `Tails` && choice === `Heads`) {
  document.write(`The flip was tails but you chose heads...you lose!`);
} else {
  document.write(`Please reload and try again...`);
};
