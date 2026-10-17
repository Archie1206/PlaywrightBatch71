function sumOfDigit(number) {
    
    let sum = 0;
    for (;number>0; number = Math.floor(number / 10)) {
        let digit = number % 10;
        sum = sum + digit;
    }
    return sum;
}

    const inputs = [15, 135, 12721];
    const outputs = [6, 9, 13];

    for (let i = 0; i < inputs.length; i++) {
        const actual = sumOfDigit(inputs[i]);

        console.log("Input : " + inputs[i]);
        console.log("Expected Output : " + outputs[i]);
        console.log("Actual Output : " + actual);

        if (actual === outputs[i]) {
            console.log("PASS");
        } else {
            console.log("FAIL");
        }

        console.log("----------------");
    }