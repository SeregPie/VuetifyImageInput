import Function_prototype_bindRecursive from '../../Function/prototype/bindRecursive';

export default function(that, length) {
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let combinations = [];
		array = array.slice();
		while (array.length) {
			let value = array[0];
			recur(array, length).forEach(combination => {
				combination.unshift(value);
				combinations.push(combination);
			});
			array.shift();
		}
		return combinations;
	})(that, length);
}
