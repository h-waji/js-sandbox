import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Sandbox</h1>
<div>
  message
</div>
`;

// -----
const person = {
  name: "Lazy",
  age: 100
}
console.log(person);
person.name = "Namakemono";
person.address = "Hogehoge";
console.log(person);

const colors = ["red", "yellow", "blue"];
console.log(colors);
colors[0] = "black";
console.log(colors);
colors.push("white");
console.log(colors);

// -----
const message = `I'm ${person.name}...`;
console.log(message);

// -----
// const fnarrow = (str) => {
//   return str;
// };
const fnarrow = (str) => str;
console.log(fnarrow('Arrow'));

// -----
const vocaloid = ["Miku", "Rin", "Len"];
// vocaloid.map((name) => {
//   console.log(name);
// });

const vocaloid2 = vocaloid.map((name) => {
  return name;
});
console.log(vocaloid2);

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.filter((n) => {
  return n % 2 === 1;
});
console.log(newNumbers);

const newVocaloid = vocaloid.map((name) => {
  if (name === "Miku") {
    return `${name}さん`;
  } else if (name === "Rin") {
    return `${name}ちゃん`;
  } else if (name === "Len") {
    return `${name}くん`;
  }
});
console.log(newVocaloid);

// -----
// "Vocaloid" 0 10 undefined null false NaN "" [] {}
const val = "";
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}
