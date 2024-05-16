import inquirer from "inquirer";
let mybalance = 25000; //Dollar 
let mypincode = 3490;
console.log("welcome to my ATM");
let code = await inquirer.prompt([{
        name: "pincode",
        type: "number",
        message: "Please enter your pincode:"
    }]);
if (code.pincode == mypincode) {
    console.log("correct pincode", "Login successfully");
    let action1 = await inquirer.prompt([{
            name: "action2",
            type: "list",
            choices: ["withdraw", "fastcash", "checkbalance"],
            message: "please select  withdrawal option:"
        }]);
    if (action1.action2 === "fastcash") {
        let fastcashans = await inquirer.prompt([{
                name: "cash",
                type: "list",
                message: "select fast cash amount:",
                choices: [1000, 3000, 2000, 4000, 5000]
            }]);
        if (mybalance -= fastcashans.cash) {
            console.log(fastcashans.cash, "withdrawal successfully");
            console.log("your remaining balance is:", mybalance);
        }
        else {
            fastcashans.cash > mybalance;
            console.log("insufficant balance");
            console.log("your current balance is:", mybalance);
        }
    }
    if (action1.action2 == "withdraw") {
        let amountans = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "enter your amount:"
            }]);
        if (amountans.amount > mybalance) {
            console.log("insufficant balance");
            console.log("your current balance is:", mybalance);
        }
        else {
            mybalance -= amountans.amount;
            console.log(amountans.amount, "withdrawal successfully");
            console.log("your remaining balance is:", mybalance);
        }
    }
    if (action1.action2 === "checkbalance") {
        console.log("your current balance is:", mybalance);
    }
}
else {
    code.pincode == mypincode;
    console.log("wrong pin");
}
