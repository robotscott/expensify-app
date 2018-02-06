//Object Destructuring

// const person = {
// 	name: "Scott",
// 	age: 32,
// 	location: {
// 		city: "Austin",
// 		temp: 60
// 	}
// };

// const {name = "Anonymous", age} = person;

// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: "Penguin"
// 	}
// };

// const {name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = ["14716 Springs Edge Dr", "Austin", "Texas", "78717"];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (iced)", "$2.00", "$2.50", "$2.75"];
const [coffee, , mPrice] = item;
console.log(`A medium ${coffee} costs ${mPrice}`);