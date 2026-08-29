// Challenge 1: Calculate Ticket Price
// Child (Age < 12): $10

// Senior (Age >= 65): $12

// Adult (All other ages): $20

// VIP Perk: If isVip is true, apply a $5 discount to the final price regardless of age category.

    let ticketPrice = (customerAge, isVip = false) => {
        const discount = isVip ? 5 : 0;

        if (customerAge < 12) return 10 - discount
        if (customerAge >= 65) return 12 - discount

        return 20 - discount

    }

    console.log(`Your ticket price is ${ticketPrice(20, true)}`)



// Challenge 2: Coaster Safety Check
// To ride the "Mega Loop" coaster, a visitor must meet both requirements:

// Height must be at least 140 cm.

// Age must be at least 12 years old.

// Set canRideCoaster to true or false.


    let megaLoop = (height, age) => {

        let canRideCoaster = height >= 140 && age >= 12 ? true : false;
        console.log(canRideCoaster)

    }

    console.log(megaLoop(1,20))



// Challenge 3: Output the Scanner Summary
// Print a full status report to the console using conditional logic or template literals:

// Print the calculated ticketPrice.

// Print "Access Granted to Mega Loop!" if canRideCoaster is true, otherwise print "Access Denied: Must be 12+ years old and 140cm+ tall."


    let megaLoopScanner = (customerAge, height, isVip) => {
        let basePrice = 20;
        let discountedPrice = 5
        
        if (customerAge < 12) basePrice = 10;
        if (customerAge >= 65) basePrice = 12;

        const finalPrice = isVip ? basePrice - discountedPrice : basePrice;

        const canRideCoaster = height >= 140 && customerAge > 18;
        
        if (canRideCoaster) {
            console.log(`Your ticket price ${finalPrice}`)
        } else {
            console.log(`You must meet requirement first`)
        } return

    }

    megaLoopScanner (20, 150, false);