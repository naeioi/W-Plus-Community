function padArray(arr, num) {
	try {
		return arr.concat(Array(num - arr.length).fill(arr[0] ? arr[0].constructor() : null));
	}
	catch(e) {
		return arr;
	}
}

export default padArray