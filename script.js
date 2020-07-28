"use strict";

const Name = "Troy Hanson";
let age = 26;
const birthday = "04/08/1994";
let detroitGC = true;
const lifeEvents = [
  "I just graduated from bachelors program last month",
  "I bought my first new car two years ago",
  "I moved out of my parents house last year",
  "I was born and raised in Dearborn, Mi",
];

if (detroitGC) {
  console.log(
    `My name is ${Name} and I am currently a student at Grand Circus in Detroit, Michigan. I am currently ${age} and my birthday is ${birthday}`
  );
} else {
  console.log(
    `My name is ${Name} and I am currently a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} and my birthday is ${birthday}`
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

// for (let lifeEvent of lifeEvents) {
//   console.log(lifeEvent);
// }

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} interations to randomly generate the number 5`
    );
    break;
  }
}
