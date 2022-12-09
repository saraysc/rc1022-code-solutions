const takeAChance = require('./take-a-chance');

const promise1 = new Promise((resolve, reject)=>{
  resolve(takeAChance("Sara"));
})

promise1.then((value)=>{
  console.log(value);
}).catch((error) => {
  console.error(error);
});
