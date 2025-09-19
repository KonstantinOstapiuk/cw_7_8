function digitize(n) {
  return String(n).split('').reverse().map(Number)
}
console.log(digitize(123))


function calculator(a,b,sign){
    if(typeof a !== "number" || typeof b !== "number"){
        return "unknown value"
    }
  switch (sign){
      case '+':
        return a+b;
      case '-':
        return a-b;
      case '*':
        return a*b;
      case '/':
        return a/b;
      default:
        return "unknown value"
      
  }
}
console.log(calculator('e',3,'+'))

function calculator(a,b,sign){
    if(typeof a !== "number" || typeof b !== "number"){
        return "unknown value"
    }else {
        return `${a}${sign}${b}`
    }
}
console.log(calculator(5,3,'+'))