import MyActionLayer from './components/ActionLayer';
import MyForegroundLayer from './components/ForegroundLayer';

import background from './constants/background';

export default function(h) {
	return h(
		'div',
		{
			style: {
				background,
				bottom: 0,
				left: 0,
				overflow: 'hidden',
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[
			h(MyForegroundLayer),
			h(MyActionLayer),
		],
	);
}
