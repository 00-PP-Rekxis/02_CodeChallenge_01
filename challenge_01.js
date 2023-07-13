
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let ersteZahl = prompt("Bitte geben Sie die erste Zahl ein: ");
let zweiteZahl = prompt("Bitte geben Sie die zweite Zahl ein: ");

let summe = parseInt(ersteZahl) + parseInt(zweiteZahl);

console.log(`Die Summe der Zahlen ${ersteZahl} und ${zweiteZahl} beträgt: ${summe}`)
