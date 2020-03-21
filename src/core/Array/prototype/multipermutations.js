import Function_prototype_bindRecursive from '../../Function/prototype/bindRecursive';

export default function(that, length) {
	return Function_prototype_bindRecursive((recur, array, length) => {
		if (--length < 0) {
			return [[]];
		}
		let permutations = [];
		array.forEach(value => {
			recur(array, length).forEach(permutation => {
				permutation.unshift(value);
				permutations.push(permutation);
			});
		});
		return permutations;
	})(that, length);
}
