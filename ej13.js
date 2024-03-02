//fill
const array = [1,2,3,4,5,6,7] 
// fill the array with 10 starting from index 3 4 
console.log(array.fill(10, 3)) // [1, 2, 3, 10, 10, 10, 10] 5 6 
// fill the array with 8 starting from index 4 to index 6 7
console.log(array.fill(8, 4, 6)) // [1, 2, 3, 10, 8, 8, 10]