import MyActionLayer from './components/ActionLayer';

import background from './constants/background';

export default function(h) {
	return h(
		'div',
		{
			style: {
				bottom: 0,
				background,
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[
			h(MyActionLayer),
		],
	);
}
