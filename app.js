// Chapter 8 to 17
// q no 1
// var a = prompt( 'Enter you name'  )


// q no 2


// var defaultnum = 5
// var userinput = +prompt('Enter value' , defaultnum)
// for ( var i=1 ; i<11 ; i++ ){
//     document.write( userinput , "X" , i , '=' , userinput*i , "<br>"  )
// }



// q no 3

// var userinput = prompt ('Enter city name')
// var arr = ['karachi'  ]

// if (userinput == arr){
//     document.write('Welcome')
// }

// else {
//     document.write ('city not found')
// }



//  qno 4
// var userinput = prompt('Enter Gender')
// var userinput1 =  'Male' 
// var userinput2 =  'female'

// if(userinput == userinput1){
//     document.write("Welcome Sir")
// }

// else if(userinput==userinput2) { 
//     document.write('Welcome Madam')
// }


// Q no 5 

// var userinput = prompt('Enter light')


// if (userinput == 'red'){
// document.write('vehicle must have to stop')
// }

// else if ( userinput == 'yellow' ){
//     document.write('vehicle should get ready to move')
// }

// else if ( userinput == 'green' ){
//     document.write('vehicle can move now')
// }



// Qno 6 

// var userinput = prompt('Enter age')
// var max_age = "18"

// if (userinput < max_age){
//     document.write('Sorry You are under age ')
// }

// if (userinput >= max_age){
//     document.write('you are welcome')
// }


// Q no 7 


// var userinput = prompt('Enter Fuel value')
// var max_fuel = "0.25"

// if(userinput >= max_fuel ){
//     document.write(" your have fuel in your tank")
// }

// else if ( userinput < max_fuel){
//     document.write("Please refill the fuel of car ")
// } I




// var defaultnum = 5
// var userinput = +prompt ('enter number to Print table' , defaultnum)

// for (var i = 1 ; i < 11 ; i++   ){
//     document.write( userinput + " X " + i + " = "  + userinput*i + "<br>")
// }


//  Q no 9 :

// var userinp = prompt('Enter Your marks')
// var total = 300
// var percentage = (userinp/total) *100
// var Grade1 = "A"
// var Grade2 = "B"
// var Remarks = "You are passed"
// var Remarks2 = "You need to improve"

 
// if (percentage > 80 && percentage < 100 ){
//     document.write( "Total" + "=" + total ," " ,"Marks Obt" + "=" + userinp ," ", "Percentage" + "=" + percentage ," ", "Grade" + "=" +Grade1 , " ","Remarks" + "=" + Remarks  )

// }

// else if(percentage > 10 && percentage < 80 ){
//     document.write(total ," " , userinp ," ", percentage ," ", Grade2 , " ",Remarks2)
// }
// else{
//     document.write("Error")
// }





// q no 11


// var userinp = prompt('enter Secret number')
// var secretNumber = 5
// var secretNumber2 = 6
// var secretNumber3 = 4


// if(userinp == secretNumber){
//     document.write('Bingo')
// }

// else if (userinp == secretNumber2){
//     document.write('You are Close enough')
// }

// else if (userinp == secretNumber3){
//     document.write('You are Close enough')
// }

// else if(userinp > 10){
//     document.write("You must have to write number between 1 to 10")
// }

// else{
//     document.write("No that is not the secret number")
// }

// q no 12


// var userInput = prompt("Enter a number:");
// var number = parseInt(userInput);


// if (number % 3 === 0) {
//   alert(number + " is divisible by 3.");
// } else {
//   alert(number + " is not divisible by 3.");
// }


//q no 13

// var team1 = prompt('Enter Team 1 name')
// var team2 = prompt('Enter Team 2 name')
// var score1 = prompt('Enter score 1 ')
// var score2 = prompt('Enter score 2 ')
// var team1 = score1 + ' ' + (team1)
// var team2 = score2  + ' ' + (team2)

// if (score1 == score2){
//     document.write("match tied")
// }

// else if(team1 > team2){
//     document.write( team1 , " won the game "  )
// }
// else if (team2 > team1){
//     document.write( team2 , " won the game "  )
// }

// Q no 16

// var t = prompt("enter Temprature")

// if( t > 40){
//     document.write ('it is too hot outside')
// }

// else if ( t > 30){
//     document.write ('it is normal outside')
// }
// else if ( t > 20){
//     document.write ('it is Cool outside')
// }
// else if ( t > 10){
//     document.write ('it is too Cold outside')
// }

// else{
//     document.write ('omg DO NOT GO outside') 
// }


// Q NO 17 

//   var userinp1 = +prompt("enter value 1")    
//   var userinp2 = +prompt("enter value 2")    
//   var op = prompt("enter Operation to perform")

//   if( op === "+"){
//     document.write(userinp1 + userinp2)
//   }

//  else if( op === "-"){
//     document.write(userinp1 - userinp2)
//   }

//  else if( op === "*"){
//     document.write(userinp1 * userinp2)
//   }
//   else if( op === "/"){
//     document.write(userinp1 / userinp2)
//   }
//   else if( op === "%"){
//     document.write(userinp1 % userinp2)
//   }

// q no 18

// var userinp = prompt("enter Day")
// var monday = "Monday"
// var tuesday = "Tuesday"
// var wednesday = "Wednesday"
// var thursday = "Thursday"
// var friday = "Friday"
// var saturday = "Saturday"
// var sunday = "Sunday"

// if(userinp === monday ){
//     document.write("It is a week day")
// }
// else if(userinp === tuesday){
//     document.write("It is a week day")
// }
// else if(userinp === wednesday){
//     document.write("It is a week day")
// }
// else if(userinp === thursday){
//     document.write("It is a week day")
// }
// else if(userinp === friday){
//     document.write("It is a weekend ")
// }
// else if(userinp === saturday){
//     document.write("It is a weekend")
// }
// else if(userinp === sunday){
//     document.write("It is sunday")
// }
// else{
//     alert("please fill the day")
// }


// qno 19

// var score =  prompt ("enter score")

// if(score >= 50){
//     alert("you are passed")
// }
// else if (score < 50){
//     alert("Try again")
// }

// q no 20

// var number1 = prompt("Enter number 1")
// var number2 = prompt("Enter number 2")

// if (number1 == '' || number2 == '' ) {
//     alert("please fill all the field")

// }

// else if (number1 > number2){
//     document.write(` ${number1} is higher than ${number2}   `)
// }
// else if (number1 == number2){
//     document.write(` ${number1} is Equal to ${number1}   `)
// }

// else if (number1 < number2) {
//     document.write(` ${number2} is higher than ${number1}   `)

// }

// q no 21

// var userinp = prompt("Enter Value")
// var es = "hola mundo"
// var de = "hallo welt"
// var en ="hello world"


// if (userinp === es ){
//     alert(en)
// }
// else if( userinp === de){
//     alert(en)
// }
// else if (userinp === "en"){

//     alert(en)
    
// }


// qno 22

// var userinp =  prompt("Enter Number")

// if(userinp >= 0  ){
//     alert(`${userinp} is the positive number `)
// }

// else if ( userinp < 0 ){
//     alert(`${userinp} is the negative number `)
// }

// qno 23

// var number = prompt("Enter Number ")
// var noun = prompt("enter noun")

// alert(number + ' ' + noun)


// Chapter 12-13 **************

// 1st question --------------------------------------------- 

// var numb = prompt("Enter a number to check weather it is divisible by 3 or not: ");
// if (numb % 3 == 0) {
//     alert(numb + " is divisible by 3.");
// } else {
//     alert(numb + " is not divisible by 3.");
// }


// 2nd question ----------------------------------------

// var numb = prompt("Enter a number to check weather it is even or odd: ");
// if (numb % 2 == 0) {
//     alert(numb + " is even.");
// } else {
//     alert(numb + " is odd.");
// }

// Q no 3 


// var userinput = prompt('Enter age')
// var max_age = "18"

// if (userinput < max_age){
//     document.write('Sorry You are under age ')
// }

//  else if (userinput >= max_age){
//     document.write('you are welcome')
// }

// q no 4

// var userinp = prompt("enter User name")
// var userName = "Hammad"

// if (userinp == userName){
//     alert("Hello"+ userName)
// }
// else {
//     alert("incorrect user name")
// }


// q no 5


// var number = prompt("Enter a number:")

// switch (number % 3) {
//   case 0:
//     alert(`${number} is divisible by 3.`);
//     break;
//   default:
//     alert(`${number} is not divisible by 3.`);
//     break;
// }

// q no 6



// var char = prompt("Enter a character:");


// if (!isNaN(char)) {
//     alert(char + " is a number.");
// } 

// else if (char === char.toUpperCase()) {
//     alert(char + " is an uppercase letter.");
// } 

// else if (char === char.toLowerCase()) {
//     alert(char + " is a lowercase letter.");
// } 

// else {
//     alert(char + " is neither a number nor a letter.");
// }


// q no 7


// var num1 =prompt("Enter the first number:")
// var num2 = prompt("Enter the second number:")
// var operator = prompt("Enter an operator (+, -, *, /, %)")

// var result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Division by zero is not allowed";
//     }
//     break;
//   case "%":
//     if (num2 !== 0) {
//       result = num1 % num2;
//     } else {
//       result = "Modulus by zero is not allowed";
//     }
//     break;
//   default:
//     result = "Invalid operator";
//     break;
// }

// document.write(`Result: ${result}`);


// q no 9

// var year = parseInt(prompt("Enter a year (YYYY format):"));


// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }

// q no 10 

// var userinput =  prompt("enter Password")
// var Password = "Hammad"

// if(userinput === Password){
//     alert("Correct")

// }

// else{
//     alert("Incorrect password")
// }


// q no 11

// var firstname = "Ali"
// if (firstname === "Fahad"){
//     alert("Hello Fahad")


// }

// else{
//     alert("you are not fahad")
// }

// q no 12


// var hour = prompt("Enter Hours");
// if (hour < 18 ){
//     alert("Good day")

// }
// else{
//     alert("Good Evening")
// }


// q no 13

// var num1 = prompt("Enter number 1")
// var num2 = prompt("Enter number 2")

// if(num1 > num2){
//     document.write(`${num1}`+ ' ' + "is greater")
// }
// else if(num2 > num1){
//     document.write(`${num2}`+ ' ' + "is greater")
// }
// else if (num1 == num2){
//     document.write(`${num1}`+ ' ' + "is equal to" + ' ' + ` ${num2} ` )
// }

// q no 14

// var userinp = prompt("Enter Number")

// if( userinp > 0  ){
//     alert(`${userinp}`+ ' ' + " is Positive number ")
// }
// else if (userinp < 0 ){
//     alert(`${userinp}`+ ' ' + " is negative number ")
// }
// else if ( userinp == 0){
//     alert("zero number ")
// }

// q no 15

// var Hours = prompt("Enter Current hour")
// var breakfast = "Break Fast is served"
// var lunch = "it is lunch time"
// var dinner = "it is Dinner time"
// var others = "go get a snack"

// if(Hours >= 6+"am"  === Hours == 9+"am"   ){
//     alert(breakfast)
//     }

// else if (Hours >= 11+"am"  === Hours == 1+"pm"   ){
//     alert(lunch)
// }
// else if (Hours >= 5+"pm"  === Hours == 8+"pm"   ){
//     alert(dinner)
// }
// else{
//     alert(others)
// }

// q no 20
// ====================Ternary operator================== 
// var age = prompt("Enter age");
// var res = age >= 18 ? "too enough" : "too young";
// alert (res)



// Chapter 14-17 ====================

//  qno 1=======
// var stdentName = [""]


//  qno 2=======

// var person_1 = {
// name : "hammad" ,
// Dob : 15/11/2003,
// Skills : "Programmer"

// }
// console.log(person_1)

//  qno 3 =======

// var strArr = ["Hammad", "Hammas", "fahad", "Ahmed"];

//  qno 4 =======


// var numArr = [1,2,3,4,5,6,7,8,9];

//  qno 5 =======


// var boolArr = [true, false, true, true, false, false]; 

//  qno 6 =======

// var mixARR = ["Hammad" , 1 , true]

//  qno 7 =======

// var networks = ["jazz", "telenor", "ufone", "warid", "zong"];

//  qno 8 =======

// var qualifications = ["SSC" , "HSC", "BCS", "BS", "BCOM", "MS","M. Phil.", "PhD"]
// for (var i=0 ; i<qualifications.length ; i++){
//     document.write( i + qualifications[i] + "<br>")
// }

//  qno 9 =======

// var movies = ['Jurassic Park' , 'Age of ultron' , 'inside out' , 'Avengers' ]
// for (var i=0 ; i<movies.length ; i++){
//     document.write( i + ')' +  ' ' + movies[i] + "<br>"  + "<br>" + "<br>" )
// }

// document.write( "Length of array  : " + movies.length)


//  qno 10 =======


// var cars = ["Audi", "Toyota", "Honda", "Lamborghini"];
// document.write("First index of the array: 0","<br>");
// document.write("Car at first index of the array: " + cars[0], "<br>");
// document.write("Last index of the array: " + (cars.length -1), "<br>");
// document.write("Car at last index of the array: " + cars[cars.length - 1]);


//  qno 13 =======



// var numbers = [52, 85, 85, 54, 12, 63, 20, 81, 50];
// document.write("Scores of students: " + numbers, "<br>");
// document.write("Ordered scores of students: " + numbers.sort());



//  qno 14 =======
// var fruits = ["Banana" , "Apple" , "Strawberry" , "Orange"];
// document.write("fruits list : " + fruits, "<br>");
// document.write("Ordered fruit list: " + fruits.sort());


//  qno 15 =======


// var cities =  ["karachi" , "lahore" , "Quetta" , "Muree" , "Sawat" ]
// var selectedCities = cities.splice(0,3)
// document.write(selectedCities)

//  qno 16 =======

// var arr = ["This ", " is ", " my ", " cat."];
// document.write("Array:", "<br>", arr, "<br>", "String: ", "<br>",  arr.join(" "))

//  qno 19 =======

//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select id='selectedManufacturer'>");

// for(var i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i]+ "'>" + manufacturers[i] + "</option>");
// };

// document.write("</select>")


// 20th question -----------------------------------------------------------

// var multiArr = [[]];


// 21 question -------------------------------------------------------------


// var matrix = [
//     [1, 2, 3, 0],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// for(var i = 0; i < matrix.length; i++){
//     document.write(matrix[i], "<br>")
// }