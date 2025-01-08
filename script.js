// Initialize an empty array
let stringArray = [];

// Function to add a string to the array if it doesn't already exist
function addString(newString) {
    if (stringArray.includes(newString)) {
        console.log(`"${newString}" is already in the array.`);
    } else {
        stringArray.push(newString);
        console.log(`"${newString}" has been added to the array.`);
    }

    // Sort the array alphabetically
    stringArray.sort();

    // Print the array
    console.log("Current Array (Alphabetical Order):", stringArray);

    // Print the length of the array
    console.log("Array Length:", stringArray.length);
}

// Example Usage
addString("Apple");
addString("Orange");
addString("Banana");
addString("Apple"); // Duplicate, won't be added
addString("Grapes");
