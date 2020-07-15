// sync code example

function otherFunct(){
	console.log("Other function");
	console.log("Another function");
}

console.log("Start");

otherFunct();

setTimeout(() => {
	console.log("Inside timeout after 5 seconds");
}, 5000);

console.log("End");	