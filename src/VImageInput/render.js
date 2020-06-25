import cssFullHeight from './css/FullHeight';
import cssFullWidth from './css/FullWidth';
import cssPlaceholder from './css/Placeholder';
import cssPositionCover from './css/PositionCover';

import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyImageEdit from './components/ImageEdit';
import MyImageLoad from './components/ImageLoad';
import MyResetButton from './components/ResetButton';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyZoomSlider from './components/ZoomSlider';

export default function(h) {
	let {
		clearable,
		flippable,
		fullHeight,
		fullWidth,
		imageHeight,
		imageWidth,
		internalImage,
		resetable,
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
				...(fullWidth ? cssFullWidth : {}),
				...(fullHeight ? cssFullHeight : {}),
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
					h(
						'div',
						{
							style: {
								height: `${imageHeight}px`,
								margin: '50px',
								width: `${imageWidth}px`,
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
						[internalImage
							? h(
								MyImageEdit,
								{
									style: {...cssPositionCover},
									key: 0,
								},
							)
							: h(
								MyImageLoad,
								{
									style: {...cssPositionCover},
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
						...(internalImage ? {} : cssPlaceholder),
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
					...(resetable
						? [
							h('VSpacer'),
							h(MyResetButton),
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
						...(internalImage ? {} : cssPlaceholder),
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
