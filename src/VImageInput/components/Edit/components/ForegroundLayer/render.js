export default function(h) {
	return h(
		'div',
		{
			style: {
				border: '4px solid #fff',
				bottom: '50%',
				boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.6)',
				height: '100px',
				maxHeight: '100%',
				maxWidth: '100%',
				pointerEvents: 'none',
				position: 'absolute',
				right: '50%',
				transform: 'translate(50%,50%)',
				width: '100px',
			},
		},
	);
}
