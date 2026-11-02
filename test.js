
const { add } = require("./app");

if (add(2, 3) === 5) {
    console.log("Test passed: 2 + 3 = 5");
} else {
    console.error("Test failed");
    process.exit(1);
}
