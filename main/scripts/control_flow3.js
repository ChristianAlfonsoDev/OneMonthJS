// Challenge 1: Video Game Inventory Weight & Capacity System
// Scenario: An RPG character is attempting to pick up an item. Check if they have enough inventory capacity and space in their backpack.

// Rules:

// If itemWeight is less than or equal to 0: return "Invalid Item Weight".

// If picking up the item exceeds maxWeightCapacity: return "Overencumbered: Too Heavy".

// If current inventoryItemCount is already equal to maxItemSlots: return "Inventory Full: No Free Slots".

// Overstrength Potion Perk: If hasStrengthBuff = true, the character gets +20 extra weight capacity before checking the weight limit.

// If all checks pass: return "Item Picked Up!".

// Task: Write a function canPickUpItem(itemWeight, currentWeight, maxWeightCapacity, inventoryItemCount, maxItemSlots, hasStrengthBuff) using guard clauses.


let canPickUpItem = (itemWeight, currentWeight, maxWeightCapacity, inventoryItemCount, maxItemSlots, hasStrengthBuff) => {

    let character = currentWeight;

    if(hasStrengthBuff){
        character += 20;
    }

    if(maxWeightCapacity) {
        return "Overencumbered: Too Heavy"
    }

    if(itemWeight <= 0) {
        return "Invalid Item Weight";
    }

    if(inventoryItemCount = maxItemSlots) {
        return "Inventory Full: No Free Slots"
    }

    console.log(canPickUpItem(10, 80, 100, 5, 10, false)); // "Item Picked Up!" (80 + 10 <= 100)    
}


canPickUpItem(10,100,)