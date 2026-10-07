/* if (condition) {
	instruction
} */

/* if (condition) {
	VructionA
} else {
	instructionB
} */
/* 
if (condition) {
	instructionA
} else if (condition) {
	instructionB
} else {
	instructionN
} */

let x = 10;
let y = 1;

if (x > 5) {
  console.log("x більше за 5");

  if (y > 2) {
    console.log("y більше за 2");
  } else {
    console.log("y менше або рівне 2");
  }
} else {
  console.log("x менше або рівне 5");
}

/* 
if (умова1) {
  if (умова2) {
    if (умова3) {
      // ... код
    } else {
      // ... код
    }
  } else {
    // ... код
  }
} else {
  // ... код
}*/

/* 
if (умова1 && умова2 && умова3) {
  // ... код
} else if (умова1 && умова2) {
  // ... код
} else if (умова1) {
  // ... код
} else {
  // ... код
}*/