function inchesToMeter(input) {
    // Convert inches to meters
    if (typeof input !== 'number' || isNaN(input)) {
        return "Invalid input. Please provide a valid number.";
    }
    const meters = input * 0.0254;
    return meters;
}

console.log("Input : 10 inches");
const actual = inchesToMeter(10);
console.log("Expected Output : 0.254 meters");
console.log("Actual Output : " + actual + " meters");

console.log("----------------");
console.log("-10.00 inchesToMeter " + inchesToMeter(-10) + " meters");
console.log("abc inchesToMeter "+ inchesToMeter("abc") + " meters");
console.log("-1000 inchesToMeter " + inchesToMeter(-1000) + " meters");
console.log("1xy  inchesToMeter "+ inchesToMeter("1xy") + " meters");
console.log("@#$ inchesToMeter "+ inchesToMeter("@#$") + " meters");