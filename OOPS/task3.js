// create class for ATM, with checkBalance, withdraw, deposit.



class ATM {
  
    debitcard;
    pin;
    checkBalance; 
    withdraw;
     deposit;

display(debitcard,pin,checkBalance,withdraw,deposit){
 this.debitcard = debitcard;
 this.pin = pin;  
 this.checkBalance = checkBalance - withdraw + deposit;
 this.withdraw =  withdraw;
 this.deposit = deposit;
}
}

const atm = new ATM()
atm.display("visa","1234",0,1000,2000)
document.writeln(atm.checkBalance)
