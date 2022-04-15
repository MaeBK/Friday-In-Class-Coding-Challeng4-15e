var userInput= prompt(" 1:Deposit or 2:Withdrawl?")
var balance= 50;
var newBalance= null;

if(userInput==1){
    prompt("How much would you like to Deposit?")
}
else if(userInput==2){
    prompt("How much would you like to Withdrawl (add - before withdrawl amount)")
}
if(balance >=1){
    alert("You got monnneeeyy!!")
}
else if(balance <=0){
    alert("Low Funds")
}
balance= balance + userInput;
console.log(`Your new balance is: ${balance}`);