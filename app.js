// alert("hello world")

// chapter 38 to 42

// question = 01

// function power(a, b) {
//     let result = 1;
//     if (b < 0) {
//         a = 1 / a;
//         b = -b;
//     }
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }


// console.log(power(2, 3));
// console.log(power(5, -2)); 





// question = 02






// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true; 
//     } else {
//         return false; 
//     }
// }


// const yearInput = prompt("Enter a year:");


// const year = parseInt(yearInput);

// if (!isNaN(year)) {
//     if (isLeapYear(year)) {
//         alert(year + " is a leap year.");
//     } else {
//         alert(year + " is not a leap year.");
//     }
// } else {
//     alert("Invalid input. Please enter a valid year.");
// }




// question = 03




// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log("The area of the triangle is: " + triangleArea);




 // question = 04






// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     const totalMarks = subject1 + subject2 + subject3;
//     const maxMarks = 300; 
//     return (totalMarks / maxMarks) * 100;
// }

// function mainFunction() {
//     const marksSubject1 = parseFloat(prompt("Enter marks for Subject 1:"));
//     const marksSubject2 = parseFloat(prompt("Enter marks for Subject 2:"));
//     const marksSubject3 = parseFloat(prompt("Enter marks for Subject 3:"));

//     if (!isNaN(marksSubject1) && !isNaN(marksSubject2) && !isNaN(marksSubject3)) {
//         const average = calculateAverage(marksSubject1, marksSubject2, marksSubject3);
//         const percentage = calculatePercentage(marksSubject1, marksSubject2, marksSubject3);

//         console.log("Marks in Subject 1: " + marksSubject1);
//         console.log("Marks in Subject 2: " + marksSubject2);
//         console.log("Marks in Subject 3: " + marksSubject3);
//         console.log("Average Marks: " + average);
//         console.log("Percentage: " + percentage + "%");
//     } else {
//         console.log("Invalid input. Please enter valid marks.");
//     }
// }

// mainFunction();




 // question = 05



//  function customIndexOf(string, charToFind) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === charToFind) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// const inputString = "Hello, World!";
// const charToSearch = "o";

// const index = customIndexOf(inputString, charToSearch);

// if (index !== -1) {
//     console.log(`The character "${charToSearch}" is found at index ${index}.`);
// } else {
//     console.log(`The character "${charToSearch}" is not found in the string.`);
// }





 // question = 06


//  function removeVowels(sentence) {
//     const regex = /[aeiouAEIOU]/g;

//     const result = sentence.replace(regex, "");

//     return result;
// }

// const inputSentence = "This is a sample sentence with vowels.";
// const result = removeVowels(inputSentence);
// console.log(result); 






 // question = 07





//  function countSuccessiveVowels(text) {
//     text = text.toLowerCase();
//     let count = 0;

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];

//         switch (currentChar) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (nextChar) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// const inputText = "Pleases read this application and give me gratuity";
// const result = countSuccessiveVowels(inputText);
// console.log("Number of successive vowels: " + result);







 // question = 08







//  function convertToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//     return kilometers * 3280.84;
// }

// function convertToInches(kilometers) {
//     return kilometers * 39370.1;
// }

// function convertToCentimeters(kilometers) {
//     return kilometers * 100000;
// }

// function printConversions(kilometers) {
//     const meters = convertToMeters(kilometers);
//     const feet = convertToFeet(kilometers);
//     const inches = convertToInches(kilometers);
//     const centimeters = convertToCentimeters(kilometers);

//     console.log(`Distance in meters: ${meters} meters`);
//     console.log(`Distance in feet: ${feet} feet`);
//     console.log(`Distance in inches: ${inches} inches`);
//     console.log(`Distance in centimeters: ${centimeters} centimeters`);
// }

// const distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

// if (!isNaN(distanceInKilometers)) {
//     printConversions(distanceInKilometers);
// } else {
//     console.log("Invalid input. Please enter a valid distance in kilometers.");
// }






 // question = 09








//  function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40; 
//     const overtimeRate = 12.00; 

//     if (hoursWorked <= regularHours) {
//         return 0; 
//     } else {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     }
// }

// const hoursWorked = parseInt(prompt("Enter the number of hours worked:"));

// if (!isNaN(hoursWorked)) {
//     const overtimePay = calculateOvertimePay(hoursWorked);
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
// } else {
//     console.log("Invalid input. Please enter a valid number of hours worked.");
// }








 // question = 10




//  function calculateCurrencyNotes(amountInHundreds) {
//     let denomination100 = 100;
//     let denomination50 = 50;
//     let denomination10 = 10;

//     let amount = amountInHundreds * 100;

//     let notes100 = 0;
//     let notes50 = 0;
//     let notes10 = 0;

//     while (amount >= denomination100) {
//         notes100++;
//         amount -= denomination100;
//     }

//     while (amount >= denomination50) {
//         notes50++;
//         amount -= denomination50;
//     }

//     while (amount >= denomination10) {
//         notes10++;
//         amount -= denomination10;
//     }

//     return {
//         notes100,
//         notes50,
//         notes10
//     };
// }

// const amountInHundreds = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

// if (!isNaN(amountInHundreds)) {
//     const notes = calculateCurrencyNotes(amountInHundreds);

//     document.write(`<p>You will have ${notes.notes100} hundred notes, ${notes.notes50} fifty notes, and ${notes.notes10} ten notes.</p>`);
// } else {
//     document.write("Invalid input. Please enter a valid amount in hundreds.");
// }