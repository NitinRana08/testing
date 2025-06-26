"use strict";
// const color = ["red", "green", "blue", "yellow", "purple"];
// // var first = color[0]
// // var second = color[1];
// // var third = color[2];
// // var forth = color[3]

// const [first,second,third] = color;
// const nitin = [x1,x2]=color
// console.log(nitin)
// x
// const addNuber=(a,b,c,...other)=>{
//     console.log("the extra is this: ",other[2])  
//     return a+b+c
    
   

// }
// const ans=addNuber(2,1,3,32,32,3,4)
// console.log(ans)

// function sum(...numbers){
//     console.log(numbers);
// }
// sum(1,1,1,1,2,2,2)


// function addNuber(a,b,c,...other){
//     console.log(other)
//     return a+b+c
// }
// const res=addNuber(4,2,2,2,2,2,2,2,21,2,12,12,1,2)
// console.log(res)

// var names = ["nitin","","each other"]
// function getname(name1,name2,name3){
//     console.log(name1)
// }
// getname(names[1])


// const details={
//     name: "nitin",
//     age : 22,
//     hobbies : ["gym","coding"]
// }

// const {age,...nitin}=details //es6
// // const AGE=details.age //es5
// console.log("hey what up", age,nitin)



// const newDetails = {
//     ...details,
//     name : ""
// }
// console.log(newDetails)



// const add=(a,b='')=>{
//     // debugger
//     return a+b
// }

// const add=(a=0,b=0)=>{
//     console.log(a+b)
// }


// add(1,21212121);




// let name = "nitin"
// let course = " bca"
// var obj = {
//     name :name,
//     course:course,
// }
// console.log(obj)
// const mySym = Symbol("key1")

// const nitinKaObj ={
   
//     name:"nitin",
//     "full name" : "nitin rana",
//     [mySym] : "myKey1",
//     age: 22,
//     location : "noida",
//     email : "nitinr8229@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday","sunday"]

// }
// console.log(nitinKaObj.email)
// console.log(nitinKaObj["email"]) 
// console.log(nitinKaObj["full name"])
// console.log(nitinKaObj[mySym])

// nitinKaObj.email = "nikhilrana@gmail.com"
// Object.freeze(nitinKaObj) // 
// nitinKaObj.email = "sdjkcnjsdkcnjks"
// console.log(nitinKaObj)

// const name = 'nitin';
// var age = 22;
// const person = {name,age}
// console.log(person)

// const user = {
//     name: "nitin",
//     address : {
//          city: "noida"
//     }
// }
// console.log(user.name)
// console.log(user.address.city)
// console.log(user.location?.city)



// const user ={
//     student:{
//         // name : "nitin",
//         age:25
//     }

// }

// console.log(user?.student?.name)


// let name = null
// let displayName = name ?? "guest"
// console.log (displayName)

// const user = {
//   name: "Nitin",
//   age: null
// };

// const age = user.age ?? 18;
// console.log(age);

// let name = "suraj"
// let displayName = name ?? "guest"
// console.log ( displayName)


// function helloji (){
//     console.log("hi1")

// }
// const nitin=()=>{
//     console.log("yo man whats up")
// }

// setTimeout(helloji,3000)
// nitin()

// const sum=(a,b)=>{
//     console.log(a+b)
// } 

// const calculator = (a,b,sumcallback)=>{
//     sumcallback(a,b) //sum(1,4)

// }
// calculator(1,4,sum)


// const calculator=(a,b,c,SUBcallback)=>{
//     SUBcallback(a,b,c)

// }
// const sub = (a,b,c)=>{
//     console.log(a-b-c)

// }
// calculator(8,4,2,sub)




// function greet (name, callback){
//     console.log("hi" + name);
//     callback();
// }
// function sayBye(){
//     console.log("goodbye!")
// }
// greet ("nitin",sayBye);



// function hlo(name,callback){
//     console.log("hello" + name);
//     callback();
// }
// hlo("nitin",function(){
//     console.log("welcome to javascript!")
// })






// promise - resolve / fullfill ||| reject

// let firstPromise = Promise((resolve , reject)=>{

// })

// this
// let car = {
//     brand : 'tata',
//     model : 'kyun bataun',
// }

// let person = {
//     firstname : 'nitin',
//     lastname : 'rana',
//     sayhello (){
//         console.log(" hello! I am " + this.firstname + " and i have a " + car.brand + ' car ')
//     }
// }
// person.sayhello()

// let person ={
//     name: 'nitin',
//     age : 22,
// }
// console.log(person.name)

// let person = new Object();
// person.name = 'nitin rana'
// person.age = 22

// console.log(person.name, person.age)
// console.log(person.age)

// const apiKey = "your_api_key_here"; 

// async function getWeather() {
//   const city = document.getElementById("cityInput").value;
  
//   if (!city) {
//     alert("Please enter a city name");
//     return;
//   }

//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();

//     const output = `
//       <h3>Weather in ${data.name}</h3>
//       <p>Temperature: ${data.main.temp}°C</p>
//       <p>Feels Like: ${data.main.feels_like}°C</p>
//       <p>Condition: ${data.weather[0].description}</p>
//       <p>Humidity: ${data.main.humidity}%</p>
//       <p>Wind Speed: ${data.wind.speed} m/s</p>
//     `;

//     document.getElementById("output").innerHTML = output;

//   } catch (error) {
//     document.getElementById("output").innerHTML = `<p style="color:red;">${error.message}</p>`;
//   }
// }

// const fruits = ["apple", "banana", "cherry"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }


// const fruits = ['banana','apple','mango']
// // for(let i=0;i<=fruit.length;i++){
// //     console.log(fruit[i])
// // }


// for(const fruit of fruits){
 
//     console.log(fruit)
// } 

// const user= 'nitn rana'
// for(const letternikalo of user){
//     console.log(letternikalo)
   
// }
//  console.log(user)


// var abc = ['nitin','rana','sharad', 'rana']

// abc.forEach(function (value,index){
//     console.log(index+ ":" + value)
// }
// )

// let arr = [4,5,6,7]
// let a = arr.map((value)=>{
    
//     // console.log(value)
//     return value + 1
    
// })
// console.log(a)

// let arr= [1,2,4,6,7,90,11,3,23,]
// let small =  arr.filter((a)=>{
//     return a<12
// })
// console.log(small)


// filter //
// let l = [1,2,3,4,23,3121,121]
// // const nitinkadata = l.filter((v,i){
// //     if(v/2 == 0){
// //         return v
// //     }
// // }) 
    

// let ans= l.reduce((total,v,i)=> total+v)
// console.log(ans)


