function luhnAlgorithm(digits) {
    let sum = 0;
  
    for (let i = 0; i < digits.length; i++) {
      let CN = parseInt(digits[i]);
  
      if ((digits.length - i) % 2 === 0) {
        CN = CN * 2;
        
        if (CN > 9) {
          CN = CN - 9;
        }
      }
  
      sum += CN;
    }
    console.log(sum)
  
    return sum % 10 === 0;
}


digits = ['1','2','3','4','10']

let result = luhnAlgorithm(digits)

console.log(result)