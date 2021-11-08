// alert("PAKISTAN ZINDABAD")

// Chapter No 13-15

// Q1
// var array = [];

// Q2
// var array = new Array()

// Q3
// var cars = ["corrola","honda","mira","aulto","cultus"]
// console.log(cars)

// Q4
// var nums = [12,8,5,21,6,4]
// console.log(nums)

// Q5
// var bol = [true,false]
// console.log(bol)

// Q6
// var arr = ["Karachi","Lahore",12,8,true,false]
// console.log(arr)

// Q7
// var education = ["SSC", "HSC", "BCS" , "BS" , "BCOM" , "MS" , "M. Phil."  ,"PhD"]
// document.write("<h2> Qualification </h2> <br>")
// for(var i = 0; i < education.length; i++){
//     document.write(i+1 + " " + education[i] + "<br>")
// }


// Q8
// var student = ["Micheal","John","Tony"]
// var num = [320,230,480]

// for(var i = 0; i < student.length; i++){
//    per = num[i] * 100 / 500;
//    document.write("<br> Score of  " + student[i] + " is " + num[i] + ". Percentage: " + per + "%")
// }


// Q9
// a 
// var color = ["red","green","blue","purple","maroon"];
// document.write(color + "<br>")
// var user = prompt("Enter The Color")
// color.unshift(user);
// document.write(color)

// b
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
// var user = prompt("Enter The Color")
// color.push(user)
// document.write(color)

// c 
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
// color.unshift("Purple","Orange")
// document.write(color)

// d 
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
// color.shift()
// document.write(color)

// e 
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
// color.pop()
// document.write(color)

// f 
// var user = prompt("Enter The Color Name")
// var position = prompt("Enter The index")
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
//  color.splice(position, 0, user);
// document.write(color)

// g 
// var user = prompt("Enter The Color Name")
// var position = prompt("Enter The index")
// var color = ["Red","Green","Blue","Yellow","Maroon"]
// document.write(color + "<br>")
//  color.splice(user, position);
//  document.write("<b> After delete </b> <br>")
// document.write(color)


// Q10
// var arr = [320,230,480,120]
// document.write("<b> Scores of Students:</b> " + arr)
// arr.sort();
// document.write("<br> <b> Ordered Scores of Students:</b> " + arr)


// Q11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write("<b> Cities list: </b> <br> " + cities)

// var newCities = cities.slice(0,3)
// document.write(" <br> <b> Selected lities list: </b> <br> " + newCities)


// Q12
// var animal = ["This", "is", "my", "cat"];
// document.write("<b> Array: </b> <br>" + animal + "<br>")

// var newAnimal  = animal.join(' ');
// document.write("<br> <b> String: </b> <br>" + newAnimal)

// Q13
// var arr = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("<h2> Device: </h2>" + arr  + "<br>")

// for(var i = 0 ; i < arr.length; i++){
//     document.write("<br> Out: <br>" + arr[i])
// }


// Q14
// var arr = ["Keyboard","Mouse","Printer","Monitor"]
// document.write("<h2> Device: </h2>" + arr  + "<br>")

// arr = arr.reverse();
// for(var i = 0 ; i < arr.length; i++){
//     document.write("<br> Out: <br>" + arr[i])
// }


// Q15
// var companies = ["Apple","Samsung","Motrola","Nokia","Sony","Haier"]
// document.write('<select>')
// companies.map((comp,i)=>{
// // console.log(i)
// opt = '<option>' + comp + '</option>';
// document.write(opt)
// });
// document.write('</select>')


// Chapter no 17-20

// Q1
// var arr = [];

// arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]


// Q3
// for(var i = 1; i <= 10; i++){
//    document.write(i + "<br>")
// }


// Q4
// var table = +prompt("Enter The Table Number")
// var tableLength = +prompt("Enter The Table Length")
// for(var i = 1; i <= tableLength; i++){
//    document.write(table + " x " + i + " =  " + table*i + "<br>")
// }


// Q5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// console.log(fruits)

// for(var i = 0; i < fruits.length; i++){
//    console.log(fruits[i])
// }


// Q6

// a 
// for(var i = 1; i <= 15; i++){
//    document.write(i + "&nbsp;&nbsp;")
// }

// b
// for(var j = 10; j >= 1; j--){
//    document.write(j + "&nbsp;&nbsp;")
// }

// c 
// for(var k = 0; k <= 20; k=k+2){
//    document.write(k + "&nbsp;&nbsp;")
// }

// d
// for(var i = 1; i <= 20; i= i+2){
//    document.write(i + "&nbsp;&nbsp;")
// }

// e 
// for(var i = 2; i <= 20; i= i+2){
//    document.write(i +  "k &nbsp;")
// }


// Q7 
// var flag = false;
// var userInput = prompt("Welcome to Rajpoot Bakery. What do you Want to order sir/ma'am?")
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// userInput = userInput.toLowerCase();

// for(var i = 0; i < bakery.length; i++){
//    if(bakery[i] === userInput){
//     alert(userInput + " is Available at index "+ [i] + " in Our Bakery")
//       flag = true;
//    }
// }
// if(flag == false){
//    alert("We are Sorry . " + userInput + " is Not Available in Our Bakery")
// }

// Q8
// var num = [24, 53, 78, 91, 12]
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (num[i]>largest) {
//       largest=num[i];
//     }
// }
// console.log(largest);

// Q9
// var num = [24, 53, 78, 91, 12]
// var small = num[0];

// for (i=0; i<num.length;i++){

//     if (num[i]<small) {
//       small=num[i];
//     }
// }
// console.log(small);


// Q10
// for(var i = 5; i <= 100; i= i+5){
//    document.write(i + " &nbsp;&nbsp;")
// }


