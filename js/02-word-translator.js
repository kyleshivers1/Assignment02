let lang = prompt(`Enter you langauge code (ES, DE, EN, FR)`);
if (lang === "FR") {
  console.log(`"Hello World" translated in French is: "Bonjour le monde"`);
} else if (lang === "DE") {
  console.log(`"Hello World" translated in German is: "Hallo Welt"`);
} else if (lang === "ES") {
  console.log(`"Hello World" translated in Spanish is: "Hola Mundo"`);
} else {
  console.log(`"Hello World" translated in English is: "Hello World"`);
}
