//sort
const array = [1,2,3,4,5,6,7] 
const alphabets = ['g', 'd', 'c', 'o', 'd', 'e', 'v'] 
const descArray = array.sort((a,b) => a > b ? -1 : 1) 
console.log(descArray)
 // [7, 6, 5, 4, 3, 2, 1] 
 const ascArray = alphabets.sort((a,b) => a > b ? 1 : -1) 
 console.log(ascArray) 
 // [ 'c', 'd', 'd', 'e', 'g', 'v' ] 