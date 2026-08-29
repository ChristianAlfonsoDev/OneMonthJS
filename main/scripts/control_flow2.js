// Activity 1: E-Commerce Free Shipping Calculator
// Scenario: Determine if a user qualifies for free shipping based on their cart total and membership level.

// Free Shipping Rules:

// Premium members (isPremium = true) get free shipping on any order amount.

// Standard members get free shipping only if their cart total is $50 or more.

// Otherwise, shipping costs $8.

// Task: Write a function calculateShipping(cartTotal, isPremium) that returns the shipping cost (0 or 8)..


let customerQualified = (cartTotal, isPremium) => { 

    if (isPremium || cartTotal >= 50) return 8;
        return 0;

}

let shipping = customerQualified(0, false)
console.log(`Shipping cost: $${shipping}`); // Output: Shipping cost: $8


// Challenge 2: The ATM Cash Dispenser Validation
// Scenario: An ATM needs to check if a user can withdraw a requested amount of cash based on their balance, daily limit, and the ATM's physical bill supply.

// Rules:

// If amount is greater than accountBalance: return "Insufficient Funds".

// If amount is greater than dailyLimit: return "Daily Limit Exceeded".

// If amount is not a multiple of 20 (e.g., $20, $40, $60): return "Invalid Amount: Must be a multiple of 20". (Hint: use the remainder operator % 20 !== 0).

// If all checks pass: return "Withdrawal Approved".

// Task: Write a function processWithdrawal(amount, accountBalance, dailyLimit) using guard clauses.

// JavaScript


let processWithdrawal = (amount, accountBalance, dailyLimit) => {


    if (amount > accountBalance) return "Insufficient Funds";
    if (amount > dailyLimit) return "Daily Limit Exceeded";
    if (amount % 100 !== 0) return "Invalid Amount: Must be a multiple of 20";

    return "Withdrawal Approved";


}

console.log(processWithdrawal(250,5000,1000));


