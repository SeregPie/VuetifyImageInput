// refactor me

export default function(that, indexes) {
	let result = indexes.map(index => that[index]);
	indexes.slice().sort((a, b) => b - a).forEach(index => {
		that.splice(index, 1);
	});
	return result;
}
