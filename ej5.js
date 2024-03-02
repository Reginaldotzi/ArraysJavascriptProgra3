//some
const array = [1,2,3,4,5,6,7]

 // Los elementos son mayores que 4
 const isGreaterThanFour = array.some(element => element > 4)
 console.log(isGreaterThanFour) // true

 // Los elementos son menores que 0
 const isLessThanTen = array.some(element => element < 0)
 console.log(isLessThanTen) // false