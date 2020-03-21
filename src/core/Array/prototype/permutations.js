import Function_prototype_bindRecursive from '../../Function/prototype/bindRecursive';

export default function(that, length) {
	if (that.length < length) {
		return [];
	}
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let permutations = [];
		array.forEach((value, index, array) => {
			array = array.slice();
			array.splice(index, 1);
			recur(array, length).forEach(permutation => {
				permutation.unshift(value);
				permutations.push(permutation);
			});
		});
		return permutations;
	})(that, length);
}
