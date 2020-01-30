import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyZoomSlider from './components/ZoomSlider';

export default function(h, {parent}) {
	let {
		clearable,
		hideActions,
	} = parent;
	return h(
		'div',
		{
			style: {
				bottom: 0,
				display: ['-ms-grid', 'grid'],
				gridColumns: 'auto 1fr auto',
				gridRows: '1fr auto',
				gridTemplateColumns: 'auto 1fr auto',
				gridTemplateRows: '1fr auto',
				left: 0,
				position: 'absolute',
				right: 0,
				top: 0,
			},
		},
		[
			...(hideActions
				? []
				: [
					h(
						'div',
						{
							style: {
								display: 'flex',
								flexDirection: 'column',
								gridColumn: 1,
								gridRow: 1,
								justifyContent: 'center',
							},
						},
						[
							h(MyRotateClockwiseButton),
							h(MyRotateCounterClockwiseButton),
							h(MyFlipHorizontallyButton),
							h(MyFlipVerticallyButton),
						],
					),
					h(
						'div',
						{
							style: {
								gridColumn: 2,
								gridRow: 2,
							},
						},
						[h(MyZoomSlider)],
					),
				]
			),
			...(clearable
				? [h(
					'div',
					{
						style: {
							gridColumn: 3,
							gridRow: 1,
						},
					},
					[h(MyClearButton)],
				)]
				: []
			),
		],
	);
}
