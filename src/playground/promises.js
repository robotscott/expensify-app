const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("This is my resolved data");
		reject("Something went wrong");
	}, 5000);
});

promise.then((data) => {
	console.log(data);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("This is my other promise");
		}, 5000);
	});
}).then((data) => {
	console.log("does this run?", data);
}).catch((error) => {
	console.log("error", error);
});