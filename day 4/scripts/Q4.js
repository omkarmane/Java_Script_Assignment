console.log('thiis is Q4..');
console.log("calculator")

function cal() {
    let choice = parseInt(prompt(`Select an Operation you want to perform(1/2/3/4/5/6):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Mod\n6. Square Root`));
    // console.log(+choice);

    switch (choice) {
        case 1:
            var num1 = parseInt(prompt(`Enter First Number: `));
            var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} plus ${num2} is ` + (num1 + num2) + ".");
            break;

        case 2:
            var num1 = parseInt(prompt(`Enter First Number: `));
            var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} minus ${num2} is ` + (num1 - num2) + ".");
            break;

        case 3:
            var num1 = parseInt(prompt(`Enter First Number: `));
            var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} into ${num2} is ` + (num1 * num2) + ".");
            break;

        case 4:
            var num1 = parseInt(prompt(`Enter First Number: `));
            var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} divided by ${num2} is ` + (num1 / num2) + ".");
            break;

        case 5:
            var num1 = parseInt(prompt(`Enter First Number: `));
            var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} mod ${num2} is ` + (num1 % num2) + ".");
            break;

        case 6:
            let num = parseInt(prompt("Enter a number: "));
            console.log(`Square Root of ${num} is ` + Math.sqrt(num) + ".");
            break;

        default:
            console.log("Enter Valid Choice!")
    }
}