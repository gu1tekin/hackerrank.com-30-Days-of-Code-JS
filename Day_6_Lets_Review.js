function processData(input) {
    // Split the input into an array of lines
    const inputArray = input.split('\n');

    // Get the number of test cases (the first element in the array)
    const numTestCases = parseInt(inputArray[0]);

    // Iterate over the test cases
    for (let i = 1; i <= numTestCases; i++) {
        // Get the current test case
        const currentTestCase = inputArray[i];

        // Separate even-indexed and odd-indexed characters
        let evenChars = '';
        let oddChars = '';

        for (let x = 0; x < currentTestCase.length; x++) {
            if (x % 2 === 0) {
                evenChars += currentTestCase[x];
            } else {
                oddChars += currentTestCase[x];
            }
        }

        // Print the result
        console.log(`${evenChars} ${oddChars}`);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
