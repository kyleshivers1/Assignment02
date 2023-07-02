let score = Number(prompt(`Select a number between 1 and 100`));

if (score > 100 || score < 1) {
  console.log(
    `Only numbers between 1 and 100 are accepted. Please reload and try again.`
  );
} else {
  if (score >= 60 && score <= 69) {
    console.log(`You received a D`);
  } else if (score >= 70 && score <= 79) {
    console.log(`You received a C`);
  } else if (score >= 80 && score <= 89) {
    console.log(`You received a B`);
  } else if (score >= 90 && score <= 100) {
    console.log(`You received an A`);
  } else {
    console.log(`You received an F`);
  }
}
