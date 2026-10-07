/* 
switch (expression) {
	case value1:
		// The code to be executed if the expression is equal to value1
		break;
	case value2:
		// The code that will be executed if the expression equals value2
		break;
	default:
		// Code that will be executed if none of the values match
}
        */

/* 
Допуск студента до іспиту
Є три умови:
- студент набрав 60 або більше балів;
- відвідуваність 80% або більше;
- усі лабораторні роботи здані.
Потрібно визначити статус студента:
- якщо виконані всі 3 умови → "Допущено до іспиту без зауважень";
- якщо виконані умови по балах і відвідуваності → "Допущено, але потрібно здати лабораторні";
- якщо виконана тільки умова по балах → "Потрібно покращити відвідуваність і здати лабораторні";
- в інших випадках → "Не допущено до іспиту".
*/

let score = 75;
let attendance = 85;
let labsCompleted = true;

switch (true) {
  case score >= 60 && attendance >= 80 && labsCompleted:
    console.log("Допущено до іспиту без зауважень");
    break;

  case score >= 60 && attendance >= 80:
    console.log("Допущено, але потрібно здати лабораторні");
    break;

  case score >= 60:
    console.log("Потрібно покращити відвідуваність і здати лабораторні");
    break;

  default:
    console.log("Не допущено до іспиту");
}

const age = 17;

switch (true) {
  case age >= 18:
    console.log("Ви можете голосувати");
    break;
  case age >= 16:
    console.log("Ви можете отримати водійське посвідомство");
    break;
  default:
    console.log(
      "Ви ще не досягли віку, коли можете отримати водійське посвідомство",
    );
}
