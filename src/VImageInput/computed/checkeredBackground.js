export default function() {
	//let {theme} = this;
	return [
		`url('data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')}')`,
		'center center / 16px 16px',
		'repeat',
		'#fff',
	].join(' ');
}
