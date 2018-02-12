// import * as firebase from "firebase";

// const config = {
// 	apiKey: "AIzaSyDAA9--zpdObWv6Ag-_1LtWQEJU950YV4M",
// 	authDomain: "expensify-8636d.firebaseapp.com",
// 	databaseURL: "https://expensify-8636d.firebaseio.com",
// 	projectId: "expensify-8636d",
// 	storageBucket: "expensify-8636d.appspot.com",
// 	messagingSenderId: "170274333460"
// };

// firebase.initializeApp(config);

// const database = firebase.database();

// database.ref("expenses").on("child_removed", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// const onExpensesChange = database
// 	.ref("expenses")
// 	.on("value", snapshot => {
// 		const expenses = [];
// 		snapshot.forEach(childSnapshot => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});
// database
// 	.ref("expenses")
// 	.once("value")
// 	.then(snapshot => {
// 		const expenses = [];
// 		snapshot.forEach(childSnapshot => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// const expenses = [
// 	{
// 		description: "Gum",
// 		note: "",
// 		amount: 195,
// 		createdAt: 0
// 	},
// 	{
// 		description: "Rent",
// 		note: "",
// 		amount: 109500,
// 		createdAt: 100
// 	},
// 	{
// 		description: "Credit Card",
// 		note: "",
// 		amount: 4500,
// 		createdAt: -100
// 	}
// ];

// expenses.map(expense => database.ref("expenses").push(expense));

// database.ref("note/-L4rJXRxkCDBWxcpvyxf").remove();

// database.ref("note").push({
// 	title: "Course Content",
// 	body: "Some Course Stuff"
// });

// const onValueChange = database.ref().on("value", (snapshot) => {
// 	const val = snapshot.val();
// 	const message = `${val.name} is a ${val.job.title} at ${val.job.company}`;
// 	console.log(message);
// });

// database.ref("location/city")
// 	.once("value")
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

// database.ref().set({
// 	name: "Scott Wedell",
// 	age: 32,
// 	stressLevel: 6,
// 	job: {
// 		title: "Software Developer",
// 		company: "Google"
// 	},
// 	location: {
// 		city: "Austin",
// 		country: "United States"
// 	}
// }).then(() => {
// 	console.log("Data is saved!");
// }).catch((e) => {
// 	console.log("This failed", e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	"job/company": "Google",
// 	"location/city": "Seattle"
// });

// database.ref("isSingle")
// 	.remove()
// 	.then(() => {
// 		console.log("data removed");
// 	}).catch((e) => {
// 		console.log(e);
// 	});
