// sync code example

function otherFunct(){
	console.log("Other function");
	console.log("Another function");
}

console.log("Start");

// setTimeout(() => {
// 	console.log("Inside timeout after 5 seconds");
// }, 5000);

function loginUser(email, password, callback) {
	setTimeout(() => {
		console.log("Now we have the data");
		callback( {userEmail : email});
	}, 3000);
}

function getUserVideos(email, callback) {
	setTimeout(() => {
		callback( ["video1", "video2", "video3"]);
	}, 2000);
}

const user = loginUser("salazar@nicemail.com", 123456, (user) => {
	console.log(user);
	getUserVideos(user.userEmail, (videos) => {
		console.log(videos);
	})
});

// console.log(user);

console.log("End");	