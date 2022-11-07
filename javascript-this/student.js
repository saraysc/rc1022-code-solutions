/* exported student */
var student = {
  firstName: 'Sara',
  lastName: 'Choi',
  subject: 'Javascript',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (firstName, lastName, subject) {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
