/*
Pseudocode for Block 7 Workshop: Secure the Vault
1. Create a string for the user saying the special message.
2. Declare variable 1 and assign it one of the vault combination numbers using a calculation.
3. Declare variable 2 and assign it one of the vault combination numbers using a calculation.
4. Declare variable 3 and assign it one of the vault combination numbers using a calculation.
5. Display an alert with the vault combination.
*/

const userInstruction =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

let firstVar = 2 + 8;
let secondVar = 80 / 2;
let thirdVar = 13 * 3;

alert(userInstruction + " " + firstVar + "-" + secondVar + "-" + thirdVar);
