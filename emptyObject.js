let obj = {n:''}

function check(obj){
if(Object.keys(obj).length === 0) {
      return true
} 
return false
}

console.log(check(obj))
console.log(Object.keys(obj).length)