function reduce(array,callback,initial){
  let acc;
  if(initial===undefined){
    acc=array[0];
  } else{
    acc=initial;
  }
  array.forEach(function(el){
    acc=callback(acc,el)
  }); return acc;
}

const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0));
