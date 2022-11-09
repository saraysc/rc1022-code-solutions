/* exported Account */
function Account(number, holder, transactions) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var valueDeposit = new Transaction('deposit', amount);
    this.transactions.push(valueDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var valueWithdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(valueWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    for (var key in this.transactions[i]) {
      if (this.transactions[i][key] === 'deposit') {
        balance = balance + this.transactions[i].amount;
      } else if (this.transactions[i][key] === 'withdrawal') {
        balance = balance - this.transactions[i].amount;
      }
    }
  } return balance;
};
