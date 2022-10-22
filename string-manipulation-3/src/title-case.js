/* exported titleCase */
function titleCase(string) {
  var obj = {
    and: true,
    or: true,
    nor: true,
    but: true,
    a: true,
    an: true,
    the: true,
    as: true,
    at: true,
    by: true,
    for: true,
    in: true,
    of: true,
    on: true,
    per: true,
    to: true
  };

  var result = string.toLowerCase().replace('javascript', 'JavaScript').split(' ');
  for (var i = 0; i < result.length; i++) {
    if (result[i] !== 'JavaScript' && result[i].length > 3) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    if (result[0].length <= 3 && !obj[result[i]]) {
      result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);
    }
    if (result[i].length <= 3 && !obj[result[i]]) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    if (result[i] === 'Api') {
      result[i] = 'API';
    }
    if (result[i].includes('-')) {
      var splitted = result[i].split('-');
      splitted[0] = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1);
      splitted[1] = splitted[1].charAt(0).toUpperCase() + splitted[1].slice(1);
      splitted = splitted.join('-');
      result[i] = splitted;
    }
    if (result[i].charAt(result[i].length - 1) === ':') {
      result[i + 1] = result[i + 1].charAt(0).toUpperCase() + result[i + 1].slice(1);
    }
  } return result.join(' ');
}
