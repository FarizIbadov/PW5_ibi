let money = [200,100,50,20,10,5,1]
let amount = 478

for(let i = 0;i < money.length;i++){
    if (amount >= money[i]){
        count = Math.floor(amount / money[i])
        amount = amount % money[i]
        console.log(`${count} banknotes of ${money[i]} manat`)
    }
}