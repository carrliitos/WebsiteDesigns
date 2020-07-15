/* Gives us a result of an asynchronous operation or 
 a failure of asynchronous operation */

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("got the user");
		// resolve({user: "carlitos"});
		reject(new Error("User not logged in"));
	}, 2000);
});

promise.then(user => {
	console.log(user);
}).catch(err => console.log(err.message));