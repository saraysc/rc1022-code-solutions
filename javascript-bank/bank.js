/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    var nextNumber = this.nextAccountNumber++;
    return nextNumber;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    for (var key in this.accounts[i]) {
      if (this.accounts[i][key] === number) {
        return this.accounts[i];
      }
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {

      totalBalance += this.accounts[i].getBalance();
    }
  } return totalBalance;
};
