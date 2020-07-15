// sync code example

function otherFunct(){
	console.log("Other function");
	console.log("Another function");
}

console.log("Start");

// setTimeout(() => {
// 	console.log("Inside timeout after 5 seconds");
// }, 5000);

/*
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

function videoDetails(video, callback) {
	setTimeout(() => {
		callback("title1", "title2", "title3");
	});
}

const user = loginUser("salazar@nicemail.com", 123456, (user) => {
	console.log(user);
	getUserVideos(user.userEmail, (videos) => {
		console.log(videos);
		videoDetails(videos, (titles) => {
			console.log(titles);
		})
	});
});

// console.log(user);
*/

function loginUser(email, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Now we have the data");
			resolve({userEmail, email});
		}, 3000);
	});	
};

function getUserVideos(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(["Video1", "Video2", "Video3"]);
		}, 2000);
	});
};

function videoDetails(video) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("title of the video");
		}, 2000);
	});
};

loginUser("Carlitos", "PUMBBBAAAAA")
.then(user => getUserVideos(user.email))
.then(vides => videoDetails(videos[0]))
.then(details => console.log(details));

console.log("End");	
