const currentDate = new Date();
//const currentYear = currentDate.getFullYear();
const currentYear = 2020;
const remainDivideFour = currentYear%4;
const remainDivideHundred = currentYear%100;
const remainDivedeFourHundred = currentYear%400;

if (remainDivideFour===0&&remainDivideHundred!==0){
    console.log(`Current year ${currentYear} is a leap year`);
}else if (remainDivedeFourHundred ===0) {
    console.log(`Current year ${currentYear} is a leap year`);
}else {
    console.log(`Current year ${currentYear} is not a leap year`);
}

