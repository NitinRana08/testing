// "use strict";
// const color = ["red", "green", "blue", "yellow", "purple"];
// // var first = color[0]
// // var second = color[1];
// // var third = color[2];
// // var forth = color[3]

// import { isValidElement } from "react"

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


// console.log('nitn_line_345')


// const number = [1,2,3]
// // number.forEach((num)=>{
// //     console.log(num * 2)

// // })
// const ans = number.map((numberAajaIdhar)=>{
//     console.log(numberAajaIdhar * 2)
// })
// // console.log(nitin)




// let nitin = [ 'nitin','rana','hello','20',"30","40"]
// // let last = nitin.slice(0,2)
// try{
// console.log(last)
// }catch(e){
//     console.log("error aa raha h")

// }
// console.log(nitin.slice(0,3))

// console.log(nitin)



// let nitin = [ '0nitin','1rana','2hello','3.20',"4.30","40"]
// console.log(nitin)
// nitin.splice(1,2,'kya haal hai')
// nitin.splice(4,0,'5th mai hoon tu nahi 40 wale')
// console.log(nitin)
// //nitin, kya haal hai / 20 / 30 /40

// let arr = [10,20,30]
// let last = arr.map((number)=>{
//     return number *number

// })
// arr.map((number,index)=>{
//     console.log(number + 1)
//     console.log(index)
// })



// console.log(last

// )


// let arr = [10,20,30]
// for ( let i = 0 ; i < arr.length; i++){
//     console.log(arr[i]*2)
// }
// arr.map((number)=>{
//     console.log(number*2)
// })

// let prices = [100, 250, 400];

// // Add 18% tax
// let finalPrices = 
// prices.map(price =>  price + price * 0.18);

// console.log(finalPrices); 



// add 2 on every value
// let num = [1,2,3,4]
// let result  = num.map(n => n + 2)
// console.log(result)


// let nitin= ['nitin','rana','sharad','RANA']
// let last = nitin.splice(2,0,'hi')
// console.log(last)



// satisfies
// speechSynthesis
// webkitURL
// addEventListener
// queueMicrotaskw

// webkitURL

// let  arr = [10,20,30]
// let ansarrr = arr.map((Number)=>{
//     return Number * Number
// })
// // console.log(ansarrr)

// let anss = arr.map((Number)=>{
//     console.log(number + 1)
// })

// let arr = [10,20,30,11,21,44,51]
// let end = arr.filter((number)=>{
//     if(number % 2 === 0 ){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(end)



// let nitin= [1,2,3,4,4]
// let ans = nitin.filter((number)=>{
//     return number % 2 === 0
// })
// console.log(ans)
// // console.log(nitin)


// let arr = [ 1,2,'nitin','rana',null]
// let ans = arr.filter((value)=>{
//     if(typeof(value)=== 'number'){
//         console.log(value)
//     }else {
//         console.log()
//     }
// })
// console.log(ans)
// dont use console use return 



// let nitin = [ 1,2,'nitin','rana',null]
// let filter_arr = nitin.filter((value)=>{
//     if(typeof(value) === 'string'){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(filter_arr)


//
// let array = [ 10,20,30,40]
// let ans = array.reduce((acc,curr)=>{
//     return acc + curr;
// },0)
// console.log(ans)



// let arr = [9,1,7,4,2,8]
// arr.sort()
// console.log(arr)

// let nitin = [3,2,5,1,3,42,2]
// let hello = nitin.toSorted((a,b)=>a-b);
// console.log(hello)
// let array = [3,32,42,4,23,13,543,5,4242,42,3,2,34,3,3,53,5464,4]

// let nitinKAarray = array.sort((a,b)=> a-b );
// console.log(nitinKAarray)
//decending bbbb 
// let arrr= [,233,5,63,4,5,63,4]
// let sorting = arrr.toSorted((a,b)=>b-a)
// console.log(sorting)


// let ar = [12,34,43,42]

// let lasr = ar.


// let num = [3,12,44,24,35,245,35]
// let result = num.find((number)=> number >10)
// console.log(result)

//-----------------------------------------
// let user = [
//     {id : 1, name:'nitin'},
//     {id : 2, name:'ravi'},
//     {id : 3, name:'ankit'}
// ]

// let fonundUSER = user.find((user)=> user.id === 2)
// console.log(fonundUSER)




//  let arr = [10,20,30]
// //  arr.forEach((value,index)=>{
// //     console.log("number: ",value, "index: ", index)
// //  })
//  let length = arr.length
//  console.log(length)
// for(let index = 0;index<arr.length;index++){
//     console.log(arr[index])

// let obj= {
//     name: "ove",
//     age:23,
//     weigth: 85,
//     height: 5.5,
//     greet: function (){
//         console.log("youoyyoyoy")
//     }
// }
// for(let key in obj){
//     console.log(key, " " , obj[key])
// }


// ChannelMergerNodeclg
// ChannelMergerNodeclg


// let arr= [ 1,3,4,5]
// let obj = new set(arr)
// let hello = {
//     name : "nitin",
//     class : "bca"
// }
// console.log(hello.class)

// let hello = new Object();
// const first =  hello.name = 'nitin rana'
// console.log(first)


// class nitn{

// }

// let arr= [ 1,2,3,4,5,11111,11,1,1,1,,1,1,1]
// let removeDuplicate = new Set([1,2,3,4,5,11111,11,1,1,1,,1,1,1])

// console.log(removeDuplicate)

// let nitin = [1,2,3]
// function newAns(nitin){
//     for(let i =0;i<nitin.length;i++){
//         console.log(nitin[i]+1)
//     }


// }
// console.log(nitin)


// let arr= [1,2,3]
// const add=(arr){

// }


// let arr = [ 1,2,3]

// const addhojabb= (arr)=>{
//     for(let i =0 ; i < arr.length;i++){
//     //   console.log(arr[i]+1)
//     arr[i] = arr[i]+1
//     }

// }


// console.log(arr)







// let number = [1,2,3]
// let double = number.map(function(num){
//     return num * 2

// })
// console.log(double)
// console.log(number)














// let PriceOfNtitinsProduct = [100,200,300]
// let FinalPriceOfNtitinsProduct = PriceOfNtitinsProduct.map((price)=>{
//     let tax = price * 0.18 
//     return tax + price
// })
// console.log(FinalPriceOfNtitinsProduct)



// let paisa = [100,200,300]
// let gst = paisa.map(function (paisa){
//     let VastuEvamSevaKar = paisa * 0.18
//     console.log("aakhri paisa",paisa+VastuEvamSevaKar)

// })












//





// try{
// throw new error("hey yo yo")
// }catch(e){
//     console/log("ignored")
// }
// const nitin = 5
// if(nitin>0){
//     console.log("yes")
// }else{
//     console.log('no')
// }

// const nitin= ()=>{
// let a= 4
// let b = 3




// return "hey ans is " + (a+b)
// }
// console.log(nitin())
// setTimeout(()=>{
//     console.log("hello nitin rana @therananitin")


// },3000)
// setTimeout(()=>{
//     console.log("8130301362")


// },6000)


// try {
//      console.log("kr_ke_dikha_run_code😝")

// } catch (e) {
//   console.log("💃 balle balle: " + e.message);
// } finally {
//   console.log("😎 Code done!");
// }




// setTimeout(()=>{
//     console.log("hacking start")


// },9000)
// setTimeout(()=>{
//     console.log("hacked succesfully")


// },12000)





// let PriceOfNtitinsProduct = [100,200,300]
// let FinalPriceOfNtitinsProduct = PriceOfNtitinsProduct.map((price)=>{
//     let tax = price * 0.18 
//     return tax + price
// })
// console.log(FinalPriceOfNtitinsProduct)



// let paisa = [100,200,300]
// let gst = paisa.map(function (paisa){
//     let VastuEvamSevaKar = paisa * 0.18
//     console.log("aakhri paisa",paisa+VastuEvamSevaKar)

// })






// class ERROR extends Error{


// }



// let checkAge = (age)=>{
//     if(age<18){
//         let error = new Error("you are under age go home")
//         error.name = "Age Error"
//         throw error
//     }else{
//         console.log("welcome to the gym bb")
//     }

// }
// try{
// checkAge(1)
// }catch(err){
//     console.log("message = "+err.message)
//     console.log("name = "+err.name)
// }



// import { isValidEmail, isPasswordStrong } from './validation.js';
// const email= "nitinr8229@gmail.com";
// const password= "@therananitin";
// if (!isValidEmail(email)) {
//   console.log("❌ Invalid email");
// } else if (!isPasswordStrong(password)) {
//   console.log("❌ Password too weak");
// } else {
//   console.log("✅ Login successful!");
// }


// let calculator =(a,b)=>{
//   return a+b
// }

// console.log(calculator(2,3))

// const obj = {
//   name:"nitin",
//   rollno:22
// }
// const newObj = JSON.stringify(obj)
// console.log(newObj)

// const obj2 = JSON.parse(newObj)
// console.log(obj2)


// let jsontry={
//   name:"nitin rana",
//   class:"BCA",
//   college: "GL BAJAJ"
// }
// console.log(jsontry)

// let helloJSON = JSON.stringify(jsontry)
// console.log(helloJSON)
// let hello2JSON = JSON.parse(helloJSON)
// console.log(hello2JSON)


// let details = {
//   name:"nitin rana",
//   class:"BCA",
//   college: "GL BAJAJ",
//   location: "Greater Noida"

// }

// localStorage.setItem("person data",JSON.stringify(details))
// console.log(localStorage)

// let saved = JSON.parse(localStorage.getItem("details"))
// console.log(saved)


// import {greet} from './new.js'
// greet()


// import ('./new.js').then((module)=>{
//   module.greet()
// })



// import {sayHI} from './new.js'
// sayHI()


// import ('./new.js').then(module=>{
//   module.sayHI()
// })


// import {sum} from './new.js'
// console.log(sum(2,1))


// document.querySelector(".btn").addEventListener("click",()=>{
//   // console.log(sum(2,1))
//   import('./new.js').then((res)=>{
//     console.log(res.default(3,2))
//   }).catch((err)=>{
//     console.log(err)
//   })
// })



//

// let nitin = new Promise((resolve,reject)=>{
//   console.log("hello world")
//   // reject(new Error("andurni dikkat"))
//   resolve(96)
// })
// console.log("hellpo")

// const nitin= ()=>{
//   console.log("my name is nitin rana from hr")
// }
// setTimeout(nitin,5000)



// const nitinr = new Promise((resolve,reject)=>{

//   setTimeout(function saymyname(){
//     console.log("my name is nitin rana")
//   },5000)
// })



// decument.get


// window.addEventListener("DOMContentLoaded",()=>{
//   document.getElementById("jokeBTN").addEventListener('click',()=>{
//     fetch("https://official-joke-api.appspot.com/random_joke")
//   })
// })


//hello
// let a=2;
// let f=2;
// console.log(a+f)

// const add = (a,b)=>{
//   return a+b

// }
// console.log(add(2,1))


// function greet(name){
//     console.log("hello, ",name)
// }


// function processUser(callback){
//     const userName = "nitin rana"
//     callback(userName)
// }

// processUser(greet)

// let lastname=((Lname)=>{
//     console.log(Lname,"rana")

// })

// function firstname (saveonme){
//     const name ="nitin"
//     saveonme(name)
// }
// firstname(lastname)



// setTimeout(() => {
//     console.log("heloo")
    
// }, 5000);



// function calculate(){

// }



// let calculate=(a,b,callback)=>{
//     const result = a+b 
//     callback(result)

// }

// calculate(1,3,function(sum){
//     console.log("the sum is : ", sum)
// })


// //


// const obj = {
//     name : "nitin rana",
//     age : 22,
//     sex: "male",
//     location: 'delhi'
// }
// const storeit = JSON.stringify(obj)
// localStorage.setItem("details",storeit)
// console.log(storeit)


// const JSONSTringMAAL = `{"name":"sharad rana","age":21,"sex":"male","location":"greater noida"}`
// const savePARSE = JSON.parse(JSONSTringMAAL)
// localStorage.setItem("stingify se kiya gaya parse(code)jaisa",savePARSE)
// console.log(savePARSE)



// const link = `https://api.openweathermap.org/data/2.5/weather?q=${link}&appid=${apiKey}&units=metric`
// const data =async()=>{
//     console.log("here is your data bb")
//     let response = await fetch(link)
//     console.log(response)
// }
// data()

// const p1 = Promise.resolve("task 1 done")
// const p2 = Promise.reject("task 2 bekar")
// const p3 = Promise.resolve("task 3 done")
// async function showresult(){
//     const result = Promise.allSettled([p1,p2,p3])
//     console.log(result)
// }
// showresult()

// let fruits = "apple kiwi apple"
// let finalFruits = fruits.replaceAll("kiwi","banana")
// console.log(finalFruits)

// let str = '1-2-3-4'
// let set = str.replaceAll(/-/g,":")
// console.log(set)

// let userinput = "|  hello  world  |"
// let makeClean = userinput.replaceAll("  "," ")
// console.log(makeClean)

//  let message = "Visit google.com and open google.com";
// let formatted = message.replaceAll("google.com", "<a href='https://google.com'>google.com</a>");
// console.log(formatted);


//₹1,20,000 convert it to 120000

// let price = "₹1,20,000"
// let number = price.replaceAll(",","").replace("₹","")
// console.log(number)

// Hello! Are you #ready$ to @rock&?
let data= "Hello! Are you #ready$ to @rock&?"
let final = data.replaceAll(/[#$@&]/g,"")
console.log(final)