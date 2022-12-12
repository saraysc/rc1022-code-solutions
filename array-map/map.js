function map(array, convert){
  const result = [];

  for(var i=0;i<array.length;i++){
    result.push(convert(array[i]);
  }

  return result;
}
