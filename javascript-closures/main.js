function graduate(credential) {
  return function (fullname) {
    return fullname + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Sara Y S Choi'));
console.log(lawSchool('Sar Y S Choi'));
