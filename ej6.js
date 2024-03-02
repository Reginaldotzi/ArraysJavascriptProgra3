//every
const array = [1,2,3,4,5,6,7]

// Los elementos son mayores que 4
const isGreaterThanFour = array.every(element => element > 4)
console.log(isGreaterThanFour) // false

// Los elementos son menores que 10
const isLessThanTen = array.every(element => element < 10)
console.log(isLessThanTen) // true