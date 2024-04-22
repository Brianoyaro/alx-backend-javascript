export default function appendToEachArrayValue(array, appendString) {
	let array2 = [];
	for (let val of array) {
		array2.push(appendString + val);
	}
	return array2;
}
