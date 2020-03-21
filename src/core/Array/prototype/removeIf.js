// refactor me

export default function(array, iteratee) {
	for (let i = 0; i < array.length;) {
		if (iteratee(array[i])) {
			array.splice(i, 1);
		} else {
			i++;
		}
	}
}
