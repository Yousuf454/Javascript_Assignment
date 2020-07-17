/*==============Feet to Mile =============*/
function feetToMile(feet) {
    var oneFeet = 5280;
    if(feet < 0){
        return -1;
    }
    return feet / oneFeet;
}
let result = feetToMile(0);
console.log(result.toFixed(6));


/*============== Wood Calculator =============*/
function woodCalculator(numberOfChair, numberOfTable, numberOfBed){
    let chair = 1 * numberOfChair; // 1 cubic feet 
    let table = 3 * numberOfTable; //3 cubic feet 
    let bed = 5 * numberOfBed; //5 cubic feet 
    let total =  chair + table + bed +" cubic feet to make " +numberOfChair + " Chair, " + numberOfTable + " Table" + " and " + numberOfBed + " bed.";
    return total;
}
let totaCubicFeet = woodCalculator(2, 3, 5);
console.log("It will take a total of " + totaCubicFeet);

/*============== Brick Calculator =============*/
function brickCalculator(storey) {
    let bricksPerFoot = 1000
    if( storey < 0){
        return -1;
    }
    if (storey <= 10) {
        return storey * 15 * bricksPerFoot
    } else if (storey > 10 && storey <= 20) {
        return bricksPerFoot * (10 * 15 + (storey - 10) * 12)
    } else {
        return bricksPerFoot * (10 * 15 + 10 * 12 + (storey - 20) * 10)
    }
};

let totalBricks = brickCalculator(17);
console.log("Total Use of Bricks " + totalBricks);

/*============== Tiny Friend =============*/
function tinyFriend(name){
    if(name.length == 0){
        return -1;
    }
    let min = name[0];
    for (let i = 1; i < name.length; i++) {
        let element = name[i].length;
        if (element < min.length) {
            min = name[i];
        }
    }
    return min;
}
let friendName = tinyFriend(['santo', 'yousuf', 'sourov', 'atick', 'pallob', 'asaduzzaman']);
console.log("Tiny Friend Name is " + friendName);
