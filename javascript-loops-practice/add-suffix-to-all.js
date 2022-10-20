/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i] + suffix);
  } return result;
}
addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity');
