
function checkIfItsSunday(year) {
    const yy = (year - 1)%100;
    const c = (year - 1) - yy;
    const g = yy + yy/4;
    const dayOfTheWeek = Math.floor(((((c/100)%4)*5)+g)%7);
    return dayOfTheWeek===6 ? true : false;
    }

    for (let year = 2014; year <= 2050 ; year ++) {
        
        if(checkIfItsSunday(year)){
            console.log(`1st January is being a Sunday ${year}`);
        }
    }


/* Alt solution */
console.log("Alt solution:\n");
for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1);
    if(d.getDay()===0){
        console.log("1st January is being a Sunday  "+year);
    }
}