export default function(file) {
	let reader = new FileReader();
	reader.addEventListener('load', () => {
		this.$emit('load', reader.result);
	});
	/*reader.addEventListener('progress', event => {
		console.log(event.loaded / event.total);
	});*/
	reader.readAsDataURL(file);
}
