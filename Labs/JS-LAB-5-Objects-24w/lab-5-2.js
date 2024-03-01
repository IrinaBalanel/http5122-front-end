//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
var bankCustomer = {
    lastName: "Irina",
    branchNumber: 5,
    accountBalance: 500.25,
    interestRate: 1.03,
    makeDeposit: function(depositAmount) {
        bankCustomer.accountBalance = bankCustomer.accountBalance + depositAmount;
        return "Thank you, your current balance is now " + bankCustomer.accountBalance.toFixed(2);
    },
    makeWithdrawal: function(withdrawalAmount) {
        bankCustomer.accountBalance = bankCustomer.accountBalance - withdrawalAmount;
        return "Thank you, your current balance is now " + bankCustomer.accountBalance.toFixed(2);
    },
    addInterest: function() {
        var int = bankCustomer.interestRate;
        if (bankCustomer.multipleAccounts === true) {
            int = int + 0.005
        }
        bankCustomer.accountBalance = bankCustomer.accountBalance * int;
        return "Thank you, your current balance is now " + bankCustomer.accountBalance.toFixed(2);
    },
    multipleAccounts: true

}
console.log (bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));

//6. Once everything is working, tackle the Stretch Goal!
console.log(bankCustomer.addInterest());



