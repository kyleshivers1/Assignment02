function rateUs() {
  let rating = Number(
    prompt(`Game over! Please rate this game between 1 and 10:`)
  );
  if (rating > 10 || rating < 1) {
    alert(`Thanks for playing. Game over.`);
  } else if (rating >= 6) {
    alert(`Thanks for playing! Reload to play again!`);
  } else {
    alert(`Thanks for your feedback. We're working hard to improve the game!`);
  }
}

let ready = prompt(`Are you ready to play the game? Type "Yes" to continue.`);

if (ready === `Yes` || ready === `yes`) {
  alert(
    `You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.`
  );
  let direction =
    prompt(`Which direction would you like to head? (Please enter "forward," "left," or "right").
`);
  switch (direction) {
    case "forward":
      alert(`You walk 100 yards and safely make your way out of the cave.
    `);
      rateUs();
      break;
    case "left":
      alert(
        `Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!`
      );
      rateUs();
      break;
    case "right":
      alert(
        `You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!`
      );
      rateUs();
      break;
    default:
      alert(
        `The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.`
      );
      rateUs();
  }
} else {
  rateUs();
}
