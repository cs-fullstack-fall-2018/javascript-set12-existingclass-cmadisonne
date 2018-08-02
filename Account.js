class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {
var maddiAccount = new Account("Maddi", 100);
maddiAccount.deposit(20);
document.write(maddiAccount.balance());
var mattAccount = new Account("Matt", 1000,);
var myAccount = new Account("My", 0);
mattAccount.withdrawal(100);
myAccount.deposit(100);
document.write("Matt's Account: " + mattAccount.balance() + " My Account: " + myAccount.balance());
}

main();