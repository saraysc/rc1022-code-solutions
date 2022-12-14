const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const initialValue = 0;
const sumEquation = (array)=> array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
const sum =sumEquation(numbers)
console.log('Sum of numbers:', sum)

const productEquation = array => array.reduce((accumulator, currentValue) => accumulator * currentValue);
const product = productEquation(numbers);
console.log('Product of numbers:', product)

const balanceEquation=(array)=>
  array.reduce((accumulator,balance)=>{
    if(balance.type==='deposit'){
      return accumulator+balance.amount;
    } else{
      return accumulator-balance.amount;
    }
  }, initialValue);

const balance = balanceEquation(account);

console.log('total balance:', balance);

const compositeEquation = (array)=>
  array.reduce((accumulator, nextElement)=> Object.assign(accumulator,nextElement));

const composite = compositeEquation(traits);
console.log('Composite object:', composite)
