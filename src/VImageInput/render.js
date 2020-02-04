import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyKeepAspectRatio from './components/KeepAspectRatio';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyUpload from './components/Upload';
import MyView from './components/View';
import MyZoomSlider from './components/ZoomSlider';

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
		setScaling,
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
						display: 'grid',
						gridColumn: 1,
						gridRow: 1,
						overflow: 'hidden',
						position: 'relative',
					},
				},
				[
					h(
						MyKeepAspectRatio,
						{
							style: {
								margin: '50px',
							},
							props: {
								width: imageWidth,
								height: imageHeight,
							},
							on: {
								setScaling: setScaling,
							},
						},
					),
					h(
						'VFadeTransition',
						{
							props: {
								leaveAbsolute: true,
							},
						},
						[h(
							image ? MyView : MyUpload,
							{
								style: {
									bottom: 0,
									left: 0,
									position: 'absolute',
									right: 0,
									top: 0,
								},
							},
						)],
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
