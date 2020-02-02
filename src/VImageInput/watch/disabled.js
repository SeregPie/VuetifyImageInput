export default function(disabled){
	let {cancelLoad} = this;
	if (disabled) {
		cancelLoad();
	}
}
