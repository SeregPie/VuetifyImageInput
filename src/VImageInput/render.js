import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyResponsive from './components/Responsive';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyZoomSlider from './components/ZoomSlider';

import checkeredBackground from './constants/checkeredBackground';

export default function(h) {
	let {
		clearable,
		flippable,
		fullHeight,
		fullWidth,
		image,
		imageHeight,
		imageWidth,
		rotatable,
		zoomable,
	} = this;
	return h(
		'div',
		{
			style: {
				display: ['-ms-inline-grid', 'inline-grid'],
				gridColumns: '1fr auto',
				gridRows: '1fr auto',
				gridTemplateColumns: '1fr auto',
				gridTemplateRows: '1fr auto',
				...(fullHeight ? {height: '100%'} : {}),
				...(fullWidth ? {width: '100%'} : {}),
			},
		},
		[
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 1,
						position: 'relative',
					},
				},
				[
					h(MyResponsive),
					h(
						'VFadeTransition',
						{
							props: {
								leaveAbsolute: true,
							},
						},
						[image
							? h(
								'div',
								{
									style: {
										background: checkeredBackground,
										border: '1px solid #ccc',
										borderRadius: '4px',
										bottom: 0,
										left: 0,
										overflow: 'hidden',
										position: 'absolute',
										right: 0,
										top: 0,
									},
									key: 0,
								},
								[h(
									'div',
									{
										style: {
											border: '4px solid #fff',
											bottom: '50%',
											boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
											height: `${imageHeight}px`,
											pointerEvents: 'none',
											position: 'absolute',
											right: '50%',
											transform: 'translate(50%,50%)',
											width: `${imageWidth}px`,
										},
									},
								)],
							)
							: h(
								'div',
								{
									style: {
										border: '4px dashed #ccc',
										borderRadius: '4px',
										position: 'absolute',
										left: 0,
										top: 0,
										bottom: 0,
										right: 0,
									},
									key: 1,
								},
							)
						],
					),
				],
			),
			h(
				'div',
				{
					style: {
						display: 'flex',
						flexDirection: 'column',
						gridColumn: 2,
						gridRow: 1,
						justifyContent: 'center',
						transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
						...(image
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
							}
						),
					},
				},
				[
					...(clearable
						? [
							h(MyClearButton),
							h('VSpacer'),
						]
						: []
					),
					...(rotatable
						? [
							h(MyRotateClockwiseButton),
							h(MyRotateCounterClockwiseButton),
						]
						: []
					),
					...(flippable
						? [
							h(MyFlipHorizontallyButton),
							h(MyFlipVerticallyButton),
						]
						: []
					),
				],
			),
			h(
				'div',
				{
					style: {
						gridColumn: 1,
						gridRow: 2,
						transition: 'opacity 0.3s cubic-bezier(0.25,0.8,0.5,1)',
						...(image
							? {}
							: {
								opacity: 0,
								pointerEvents: 'none',
							}
						),
					},
				},
				(zoomable
					? [h(MyZoomSlider)]
					: []
				),
			),
		],
	);
}
