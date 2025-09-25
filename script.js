// function digitize(n) {
//   return String(n).split('').reverse().map(Number)
// }
// console.log(digitize(123))


// function calculator(a,b,sign){
//     if(typeof a !== "number" || typeof b !== "number"){
//         return "unknown value"
//     }
//   switch (sign){
//       case '+':
//         return a+b;
//       case '-':
//         return a-b;
//       case '*':
//         return a*b;
//       case '/':
//         return a/b;
//       default:
//         return "unknown value"
      
//   }
// }
// console.log(calculator('e',3,'+'))

// function calculator(a,b,sign){
//     if(typeof a !== "number" || typeof b !== "number"){
//         return "unknown value"
//     }else {
//         return `${a}${sign}${b}`
//     }
// }
// console.log(calculator(5,3,'+'))

//В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно выбрать 
// наибольшее и наименьшее число

// function highAndLow(numbers){
//   const numArr = numbers.split(' ').map(Number)
//   const namMax = Math.max(...numArr)
//   const namMin = Math.min(...numArr)
//   return `${namMax} ${namMin}`
// }


function highAndLow(numbers){
  const numArr = numbers.split(' ')
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
console.log(highAndLow("1 2 3 4 5 6 10 100 -5"))

//Изограмма — это слово, в котором нет повторяющихся букв, как последовательных, так и 
// непоследовательных. 
  
function isIsogram(str){
  const lowerStr = str.toLowerCase()
  for(let i = 0; i < lowerStr.length; i++){
    for (let j = i+1; j< lowerStr.length; j++){
      if (lowerStr[i] === lowerStr[j]){
        return false
      }
    }
  }
  return true
}
