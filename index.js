//Ques=1
//let personName = "Hello Eric"
//console.log(personName + " would you like to learn some python today;")//Hello Eric would you like to learn some python today;
//Ques=2
//let perName = "zohaibMemon"
//console.log( perName.toUpperCase())//ZOHAIBMEMON
//console.log(perName.toLowerCase())//zohaibmemon
//console.log(perName)//zohaibMemon
//Ques=3
//let Quote = "A person who never made a mistake never tried anything new."
//let Author = "Albert Einstein"
//console.log(`${Author} once said,"${Quote}"`)//Elbirt Einstein once said,"A person who never made a mistake never tried anything new."
//Ques=4
//let Quote = "A person who never made a mistake never tried anything new."
//let Author = "Albert Einstein"
//let message = `${Author} once said, "${Quote}"`
//console.log(message)
//Ques=5
//let newName = "\n Ramzan \n"
//let stripped_Name =newName.trim()
//console.log(stripped_Name)
//Ques=6
//console.log(5+3)//8
//console.log(10-2)//8
//console.log(4*2)//8
//console.log(16/2)//8
//Ques=7
//let favoNum = 5
//let message = `My favorite number is ${favoNum}.`
//console.log(message)//My favorite number is 5
//Ques=8
//let my_Name = "zohaib"//My name is zohaib
//let date = 14//today date is 14
//Ques=9
//let names = ["Zain","Abid","Ali"]
//console.log(names)
//Ques=10
//let names = ["Zain","Fahad","Ali"]
//names.forEach( name =>{
//console.log(`Hello,${name}! I hope you enjoy a great day.`)
//});
//Ques=11
//let Cars = ["BMW","Audi","Tesla"]
//Cars.forEach(Car =>{
//console.log(`I want to own a new ${Car}`)
//});
//Ques=12
//let guests = ["Nikola Tesla", "Marie Curie", "Leonardo da Vinci"]
//guests.forEach(guest=>{
//console.log(`Dear ${guest},You are cordially invited to dinner at my place.`)
//});
//let guest_cant_make_it = guests.pop()
//console.log(`Unfortunately, ${guest_cant_make_it} can't make it to dinner.`)
//guests.push("Albert Einstein")
//guests.forEach(guest=>{
//console.log(`Dear ${guest},You are cordially invited to dinner at my place.`)
//});
//Ques=13
//let guests  = ["Mehak","Qaswa","Hadiya"]
//guests.forEach(guest=>{
// console.log(`Dear ${guest},You are invited to dinner to party.`)
//});
//console.log(`\ncongragulation , we foud a big dining table.`)
//guests.unshift( "Fahad")
//guests.splice(Math.floor(guests.length / 2),0,"Ali")
//guests.push("Hamzah")
//guests.forEach(guest=> {
//console.log(`Dear ${guest} , You are invited to dinner party. `)
//});
//Ques=14
// let guests = ["Mehak","Fahad","Qaswa","Ali" ,"hamzah","Hadiya"]
// guests.forEach(guest => {
//     console.log(`Dear ${guest} , you are invited to dinner party .`)
// });
// console.log("\n Unfortunately , the new dinner table won't be arrived.")
// while(guests.length > 2){
// let Removedguest = guests.pop() ;
// console.log(`Sorry ${Removedguest} , You are can not be invited .`)   
// }
// guests.forEach(guest =>{
//     console.log(`Dear ${guest} , you are still invited to dinner party .`)
// });
// guests.pop();
// guests.pop();
// console.log("\n Final guest list:",guests);
//Ques=15
// let Placetovisit = ["Makkah","Madinah","Taif","Saudia","Lahore"]
// console.log("Original order:",Placetovisit)
// console.log("Alphabetical order:",[...Placetovisit].sort())
// console.log("Original order:",Placetovisit )
// console.log("Reverse alphabetical order:",[...Placetovisit].sort().reverse())
// console.log("Original order:",Placetovisit )
// Placetovisit.reverse()
// console.log("Reversed order:",Placetovisit)
// Placetovisit.reverse()
// console.log("Reversed order:",Placetovisit)
// Placetovisit.sort()
// console.log("Stored in alphabetical order:",Placetovisit)
// Placetovisit.sort((a, b) =>b.localeCompare(a));
// console.log("Stored in reversed alphabetical order:",Placetovisit)
//Ques=16
// let dinner_guest = ["Fahad","Mehak","Mumtaz"] 
// console.log(`You are inviting ${dinner_guest.length} people to dinner.`)
//Ques=17
// let Cities = [
//     "Hyderabad",
//     "Karachi",
//     "Lahore",
//     "Multan",
//     "Quetta",
//     "Islamabad",
// ];
// console.log("List of famous cities")
// Cities.forEach(City =>{
//     console.log(`${City}`)
// });
//Ques=18
// interface Person  {
//     perName : string;
//     Date : number;
//     surName : string; 
// }
// const Persons : Person[] = [
//      {perName : "zohaib" , Date : 15 , surName : "Memmon"},
//      {perName : "Fahad" , Date : 25 , surName : "Memon"},
//      {perName : "Mehak" , Date : 25 , surName : "Memon"} 
// ];
// Persons.forEach(Person => {
//     console.log(Person)
// });
//Ques=19
// interface Person  {
//         perName : string;
//          Date : number;
//          surName : string; 
//      }
//      const Persons : Person[] =[
//      {perName:"Zohaib" , Date: 15 , surName: "Memon"} 
//      ]
//     if(Persons.length > 1){
//         console.log(Persons[1]);
//     }else{
//         console.log("no person at index 1")
//     };
//Ques=20
// let num1 = 12
// let num2 = 17
// console.log("Is num1 equal to num2 ? I predict false.")
// console.log(num1==num2)
// console.log("Is num1 is not equal to num2 ? I predict True.")
// console.log(num1!=num2)
// console.log("Is num1 greater than num2? I predict True.");
// console.log(num1 > num2);
// console.log("Is num1 greater than or equal to num2? I predict True.");
// console.log(num1 >= num2);
//Ques=21
// let string1 = "Aar"
// let string2 = "Ceroplane"
// console.log("Is string1 is not equal to string2 ? I predict true.")
// console.log(string1!=string2)
// console.log("Is string1 greater than to string2 ? I predict false.")
// console.log(string1 > string2)
// console.log("Is string1 equal to string2 (Case insensitive)? I predict true. ")
// console.log(string1.toLowerCase() == string2.toLowerCase())
// let num1 = 12
//  let num2 = 17
//  console.log("Is num1 equal to num2 ? I predict false.")
//  console.log(num1==num2)
//  console.log("Is num1 is not equal to num2 ? I predict True.")
//  console.log(num1!=num2)
//  let boo1 = true
//  let boo2 = false
//  console.log("Is boo1 true and boo2 true ? I predict false.")
//  console.log(boo1 && boo2)
//  console.log("Is boo1 false or boo2 true ? I predict true.")
//  console.log(boo1 || boo2)
//  let fruits = ["Apple","Banana","Orange"]
//   console.log("Is Apple not in the array ? I predict false.")
//   console.log(fruits.indexOf('apple') !== -1);
//   console.log("Is Orange is the array ? I predict True.")
//   console.log(fruits.indexOf('Orange') !== -1);
//Ques=22
// let alien_color = "Green";
// if (alien_color == "Green") {
//     console.log("Congratulations! You earned 5 points.");
// }
// let alien_colour = 'red';
// if (alien_colour == 'Green') {
//     console.log("Congratulations! You earned 5 points.");
// }
//Ques= 23
// let Colour1 = "Green"
// if(Colour1 == "Green"){
// console.log("Congragulation ! you earned 5 point for shooting the green alien.")
// }else{
//     console.log("Congratulation ! you earned 10 points.")
// }
//  let Colour2 = "Red"
//  if(Colour2 == "Green"){
// console.log("Congratulation ! you earned 5 points for shooting the green align.")
//  }else{
//     console.log("Congratulation ! you earned 10 points for shooting the alien.")
//  }
//Ques=24
// let aliencolor = "Green"
// if (aliencolor == "Green")
//     console.log("Congratulation ! you earned 5 points.")    
// else if(aliencolor == "Yellow")
//     console.log("Congratulation ! you earned 10 points.")
// else
//     console.log("Congratulation ! you earned 15 points.")
// let aliencolor = "Yellow"
// if (aliencolor == "Green")
//     console.log("Congratulation ! you earned 5 points.")    
// else if(aliencolor == "Yellow")
//     console.log("Congratulation ! you earned 10 points.")
// else
//     console.log("Congratulation ! you earned 15 points.")
// let aliencolor = "Red"
// if (aliencolor == "Green")
//     console.log("Congratulation ! you earned 5 points.")    
// else if(aliencolor == "Yellow")
//     console.log("Congratulation ! you earned 10 points.")
// else
//     console.log("Congratulation ! you earned 15 points.")
//Ques=25
// let Age = "16"
// if (Age < "2"){
//     console.log("The person is a baby.")
// }else if (Age < "4"){
//     console.log("The person is a toodler. ")
// }else if (Age < "13"){
//     console.log("The person is a kid.")
// }else if (Age < "20"){
//     console.log("The person is a teenager.")
// }else if (Age < "65"){
//     console.log("The person is a adult.")
// }else{
//     console.log("The person is a older.")
// };
//Ques=26
// let favorite_Fruits = ["Bananas","Apples","Oranges"]
// if (favorite_Fruits.indexOf("Bananas")!== -1 )
//     console.log("You really like Bananas.");
//  if(favorite_Fruits.indexOf("Apples")!== -1)
//     console.log("You really like Apples");
//  if (favorite_Fruits.indexOf("Oranges")!== -1)
//     console.log("You really like Oranges.");
//Ques=27
// let User_names = ["Admin","Umair","Shayan","Mazz","Hamzah"]
// for(let i = 0; i < User_names.length; i++){
//     if(User_names[i] == "Admin"){
//         console.log("Hello Admin , would you like to see a status report.")
//     }else{
//         console.log(`Hello ${User_names[i]} , thanks for logging in again.`)
//     }
// }
//Ques=28
// let User_names = ["Admin","Umair","Shayan","Mazz","Hamzah"]
// if(User_names.length == 0){
//     console.log("We need to find some users.")
// }
//  for(let i = 0; i < User_names.length; i++){
//      if(User_names[i] == "Admin"){
//          console.log("Hello Admin , would you like to see a status report.")
//      }else{
//          console.log(`Hello ${User_names[i]} , thanks for logging in again.`)
//      }
// }
//  User_names = [];
//  if(User_names.length == 0){
//     console.log("We need to find some users.")
//  }
//Ques=29
// let Currentnames = ["Bob","Alice","John","ALaiter","Mike"]
// let Newnames = ["BOB","Nickey","ALaiter","Marco","Jansen"]
// for(let i = 0 ; i < Newnames.length; i++){
//     let UsernameExist = false;
//     for(let j = 0 ; j < Currentnames.length ; j++){
//       if(Newnames[i].toLowerCase() === Currentnames[j].toLowerCase()){
//      UsernameExist = true;
//      break;    
//       }
//     }  
//     if(UsernameExist){
//         console.log(`Sorry , the username ${Newnames[i]} is not available.`)
//     }else{
//         console.log(`Congratulation , the username ${Newnames[i]} is available.`)
//     }   
//  }
//Ques=30
// const numbers : number[] = [1,2,3,4,5,6,7,8,9]
// for (const num of numbers){
//     if(num == 1){
//         console.log("1st")
//     }else if(num == 2){
//         console.log("2nd")
//     }else if(num == 3){
//         console.log("3rd")
//     }else {
//         console.log(num + "th")
//     }
// }
//Ques=31
// const pizzas : string[] = ["Tikka","Creamy","Fajita"]
// console.log("\nPizza names")
// for(const pizza of pizzas){
//     console.log(pizza);
// }
// console.log("\n Printing sentences about your pizza.")
// for(const pizza of pizzas){
//     console.log("I really like" + pizza + "pizza." )
// }
// console.log("\n Really love pizza.")
//Ques=32
// const Animals : string[] = ["Dog","Cat","Rabbit"]
// console.log("\n Animals names")
//      for(const animal of Animals){
//          console.log(animal)
// }
// console.log("\n Statement about animals")
//     for(const animal of Animals){
//         console.log(" \nA " + animal.toLowerCase() + " would make a great pet.")
//     }
// console.log("\n Any of these animals make a great pet.")
//Ques=33
// function makeshirt (size:string , message:String): void{
// console.log(`A ${size} Shirt will be printed with the message : '${message}'`)
// }
// makeshirt("Small" , "Hello World!")
//Ques=34
// function  makeshirt (size :string = "Large",message:string = "I love typescript" ): void{
//     console.log(`\n Creating a ${size} shirt with the message ${message}`)
// }
//  makeshirt()
//  makeshirt("medium");
//  makeshirt("Large" , "Hello world!")
// //Ques=35
// function describecity(City:string , country : string = "Unknown" ):void{
//     console.log(`${City} is in ${country}`)
// }
// describecity("karachi" , "Pakistan")
// describecity("California", "United state")
// describecity("Makkah")
//Ques=36
// function City_Country (City : string , country : string):string {
//    return`${City},${country}`;
// }
// console.log(City_Country("Lahore" , "Pakistan"));
// console.log(City_Country("Makkah" , "Saudi"));
// console.log(City_Country("California" , "United state"));
//Ques=37
// interface Album {
//     artist : string;
//     title : string;
//     tracks? : number;
// }
// function makeAlbum (artistName : string , albumTitle : string , newTracks? : number): Album {
// const album : Album = {artist : artistName , title : albumTitle};
//   if(newTracks !== undefined){
//     album.tracks = newTracks;
//   }
//   return album;
// }
// const album1 : Album = makeAlbum("Artist 1" , "Album 1");
// const album2 : Album = makeAlbum("Artist 2" , "Album 2", 13);
// const album3 : Album = makeAlbum("Artist 2" , "Album 2", 25);
// console.log(album1)
// console.log(album2)
// console.log(album3)
//Ques=38
// function showMagicians (magicians : string[]):void{
// magicians.forEach(magician => console.log(magician));
// }
// const magicainNames : string[] = ["Joe","John","Nick"]
// showMagicians(magicainNames)
//Ques = 39
// function showMagicians (magicians : string[]):void{
//     magicians.forEach(magician => console.log(magician))
// }
// function Makegreat (magicians : string[]):string[] {
//     return magicians.map(magician => `${magician} the Great`);
// }
// const magicainNames : string[] = ["Joe","John","Nick"]
// const greatMagicians : string[] = Makegreat(magicainNames);
// showMagicians(greatMagicians);
//Ques=40
// function makeGreat (magicians : string[]): string[] {
// const greatMagicians : string[] = [];
// for(const magician of magicians){
//     const greatMagician = magician + " The Great ";
// greatMagicians.push(greatMagician)
// }
//  return greatMagicians;
// }
// function showMagicians (magicians : string[]):void{
//     for(const magician of magicians){
//     console.log(magician);
// }
// }
// const magicians : string[] = ["Kate" , "King" , "Kale"]
// const Originalmagicians : string[] = [...magicians];
// const greatMagician : string[] = makeGreat(Originalmagicians)
// console.log("\n Magician Names")
// showMagicians(magicians);
// console.log("\n Great magicians")
// showMagicians(greatMagician)
//Ques=41
// function orderSandwich (...Items : string[]): void {
//     if(Items.length === 0){
//         console.log("You ordered empty sandwich.")
//     }else{
//         console.log("Your sandwich includes.")
//         for(const Item of Items){
//             console.log("-" + Item)
//         }
//     }
//     console.log();
// }
// orderSandwich("Ham","Cheese","Tomato")
// orderSandwich("Egg","Onion", "Swiss")
// orderSandwich("Kabab","Tomato","Ketchup")
//Ques=42
function createCar(Manufacturer, Modul) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        Manufacturer: Manufacturer,
        Modul: Modul,
    };
    for (var _a = 0, Options_1 = Options; _a < Options_1.length; _a++) {
        var Option_1 = Options_1[_a];
        for (var Key in Option_1) {
            carInfo[Key] = Option_1[Key];
        }
    }
    return carInfo;
}
var Car = createCar("Toyota", "Sport", { color: "Black" }, { Year: 2024 });
console.log(Car);
