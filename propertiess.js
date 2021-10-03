const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    inCleaned: true
};
const kye = Object.keys(bottle);
// console.log(kye);
const Val = Object.values(bottle);
//console.log(Val);
const pairs = Object.entries(bottle);
//console.log(pairs);
Object.seal(bottle)
    // console.log(bottle);
Object.freeze(bottle);
console.log(bottle);