const supe =(cost,price_paid) => {
   const turn = cost - price_paid
   return `Youre change is ${turn}`
}
console.log(supe(60,100))