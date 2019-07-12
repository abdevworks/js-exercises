const d = new Date();
let month = d.getMonth() + 1;
let day = d.getDate();
const year = d.getFullYear();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

const output01 = month + "-" + day + "-" + year;
const output02 = month + "/" + day + "/" + year;
const output03 = day + "-" + month + "-" + year;
const output04 = day + "/" + month + "/" + year;

console.log(output01 + "\n" + output02 + "\n" + output03 + "\n" + output04);

const es6_output01 = `${month}-${day}-${year}`;
const es6_output02 = `${month}/${day}/${year}`;
const es6_output03 = `${day}-${month}-${year}`;
const es6_output04 = `${day}/${month}/${year}`;
console.log(`${es6_output01}\n${es6_output02}\n${es6_output03}\n${es6_output04}`);