

// 1
let num =5;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// 2
num = -3;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// 3
let a = 10, b = 20;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
// 4
num = 9;
if (num % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not Divisible by 3");
}
// 5
num = 21;
if (num % 7 === 0) {
  console.log("Multiple of 7");
} else {
  console.log("Not Multiple of 7");
}
// 6
let ch = 'e';
if ("aeiou".includes(ch)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
// 7
num = 30;
if (num >= 10 && num <= 50) {
  console.log("In Range");
} else {
  console.log("Out of Range");
}
// 8
num = 123;
if (num >= 100 && num <= 999) {
  console.log("3-digit number");
} else {
  console.log("Not a 3-digit number");
}
// 9
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}
// 10
let temp = 25;
if (temp > 30) {
  console.log("Hot");
} else if (temp >= 15) {
  console.log("Moderate");
} else {
  console.log("Cold");
}
// 11
a = 5; b = 15; let c = 10;
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= a && b >= c) {
  console.log(b);
} else {
  console.log(c);
}
// 12
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("Leap year");
} else {
  console.log("Not Leap year");
}
// 13
ch = '@';
if (ch >= 'A' && ch <= 'Z') {
  console.log("Uppercase");
} else if (ch >= 'a' && ch <= 'z') {
  console.log("Lowercase");
} else if (ch >= '0' && ch <= '9') {
  console.log("Digit");
} else {
  console.log("Special Character");
}
// 14
let marks = 85;
if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else if (marks >= 40) {
  console.log("D");
} else {
  console.log("F");
}
// 15
let day = 3;
if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid");
// 16
num = 55;
if (num % 5 === 0 && num % 11 === 0) {
  console.log("Divisible by 5 and 11");
} else {
  console.log("Not Divisible");
}
// 17
num = 7;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
// 18
age = 17; let name = "Alex";
if (age >= 18) {
  console.log(name + " can get license");
} else {
  console.log(name + " cannot get license");
}
// 19
a = 10; b = 10;
if (a === b) {
  console.log("Equal");
} else if (a > b) {
  console.log("First is greater");
} else {
  console.log("Second is greater");
}
// 20
num = -8;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
if (num >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
// 21
let m1 = 80, m2 = 90, m3 = 70, m4 = 60, m5 = 75;
let avg = (m1 + m2 + m3 + m4 + m5) / 5;
if (avg >= 90) console.log("A");
else if (avg >= 75) console.log("B");
else if (avg >= 60) console.log("C");
else if (avg >= 40) console.log("D");
else console.log("F");
// 22
num = 15;
if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
  console.log("Yes");
} else {
  console.log("No");
}
// 23
num = 121;
let teomp = num, rev = 0;
while (teomp > 0) {
  rev = rev * 10 + (teomp % 10);
  teomp = Math.floor(teomp / 10);
}
console.log(num === rev ? "Palindrome" : "Not Palindrome");
// 24
num = 123;
let sum = 0;
temp = num;
while (temp > 0) {
  sum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(sum % 2 === 0 ? "Sum Even" : "Sum Odd");
// 25
let hours = 45;
let overtime = hours > 40 ? (hours - 40) * 12 : 0;
console.log("Overtime Pay: Rs." + overtime);
// 26
let basic = 12000, hra, da;
if (basic < 10000) {
  hra = 0.2 * basic;
  da = 0.5 * basic;
} else {
  hra = 0.3 * basic;
  da = 0.8 * basic;
}
let net = basic + hra + da;
console.log("Net Salary: Rs." + net);
// 27
let month = 2;
if (month === 2) console.log("28 or 29 days");
else if ([4,6,9,11].includes(month)) console.log("30 days");
else if (month >= 1 && month <= 12) console.log("31 days");
else console.log("Invalid month");
// 28
let password = "Pass123!";
if (password.length >= 8 && /\d/.test(password) && /\W/.test(password)) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}
// 29
let s1 = 5, s2 = 5, s3 = 5;
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
  if (s1 === s2 && s2 === s3) console.log("Equilateral");
  else if (s1 === s2 || s2 === s3 || s1 === s3) console.log("Isosceles");
  else console.log("Scalene");
} else {
  console.log("Invalid Triangle");
}
// 30
let username = "user", passwordStored = "pass123";
let inputUser = "user", inputPass = "pass123";
if (inputUser === username && inputPass === passwordStored) {
  console.log("Login Successful");
} else {
  console.log("Invalid Login");
}