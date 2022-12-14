function filter(array, predicate){
  const result = [];
  for(let i=0;i<array.length;i++){
    result.push(predicate(array[i]));
  }
  return result;
}
