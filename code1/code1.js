for (let N = 111;N <= 999;N++){
    let number = String(N)
    a = parseInt(number[0]);
    d = parseInt(number[1]);
    r = parseInt(number[2]);
    adr= a ** 3 + d ** 3 + r ** 3

  if(N === adr){
      console.log(N)

  }    
}
