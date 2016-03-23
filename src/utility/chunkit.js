function chunkit(arr, num) {
	let ret = []
	for(let i = 0; i < arr.length; i += num) {
		ret = ret.concat([arr.slice(i, i+num)]);
	}
	return ret;
}

export default chunkit