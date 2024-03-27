#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\nWelcome to codewithAliya - alia33-cli-number-guessing-game\n");

const randonNum =Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name:"personGuessednumber",
        type:"number",
        message:"Enter your guess number 1 to 6",
    }
]);

if(answer.personGuessednumber=== randonNum){
console.log("yayyy! you guess a correct number");
}else{
    console.log("Ohoo! you guess a wrong number. Try again");
}









