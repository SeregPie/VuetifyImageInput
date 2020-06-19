// todo

import MyClearButton from './components/ClearButton';
import MyFlipHorizontallyButton from './components/FlipHorizontallyButton';
import MyFlipVerticallyButton from './components/FlipVerticallyButton';
import MyResetButton from './components/ResetButton';
import MyRotateClockwiseButton from './components/RotateClockwiseButton';
import MyRotateCounterClockwiseButton from './components/RotateCounterClockwiseButton';
import MyZoomSlider from './components/ZoomSlider';

//import checkeredBackground from './constants/checkeredBackground';

export default function(h) {
	let {
		clearable,
		flippable,
		flippedHorizontally,
		flippedVertically,
		fullHeight,
		fullWidth,
		internalImage,
		internalImageDataURL,
		imageHeight,
		imageWidth,
		resizable,
		rotatable,
		rotationInTurns,
		translationHorizontally,
		translationVertically,
		zoom,
		zoomable,
		cancelIcon,
		disabled,
		errorIcon,
		dark,
		loadError,
		loading,
		loadProgress,
		loadSuccess,
		successIcon,
		uploadIcon,
		uploadIconStyle,
		resetable,
	} = this;
	let active = false;
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
						[(image
							? h(
								'div',
								{
									style: {
										background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat',
										border: '1px solid #ccc',
										borderRadius: '4px',
										bottom: 0,
										left: 0,
										overflow: 'hidden',
										position: 'absolute',
										right: 0,
										top: 0,
									},
									key: 'anlq',
								},
								[h(
									'div',
									{
										style: {
											bottom: '50%',
											position: 'absolute',
											right: '50%',
											transform: 'translate(50%,50%)',
											width: `${imageWidth}px`,
											height: `${imageHeight}px`,
										},
									},
									[
										h(
											'img',
											{
												style: {
													bottom: '50%',
													position: 'absolute',
													right: '50%',
													transform: [
														'translate(50%,50%)',
														`scale(${zoom})`,
														`scale(${[
															flippedHorizontally ? -1 : 1,
															flippedVertically ? -1 : 1,
														].join(',')})`,
														`rotate(${rotationInTurns}turn)`,
														`translate(${[
															`${translationHorizontally}px`,
															`${translationVertically}px`,
														].join(',')})`,
													].join(' '),
													transition: 'all 0.3s',
												},
												attrs: {
													src: '/demo/image.jpg',
												},
											},
										),
										h(
											'div',
											{
												style: {
													bottom: 0,
													boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
													left: 0,
													position: 'absolute',
													right: 0,
													top: 0,
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													bottom: '100%',
													height: '4px',
													left: 0,
													position: 'absolute',
													right: 0,
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													bottom: '100%',
													height: '4px',
													left: '100%',
													position: 'absolute',
													width: '4px',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													bottom: 0,
													position: 'absolute',
													right: '100%',
													top: 0,
													width: '4px',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													height: '4px',
													left: '100%',
													position: 'absolute',
													top: '100%',
													width: '4px',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													height: '4px',
													left: 0,
													position: 'absolute',
													right: 0,
													top: '100%',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													height: '4px',
													position: 'absolute',
													right: '100%',
													top: '100%',
													width: '4px',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													bottom: 0,
													left: '100%',
													position: 'absolute',
													top: 0,
													width: '4px',
												},
											},
										),
										h(
											'div',
											{
												style: {
													backgroundColor: '#fff',
													bottom: '100%',
													height: '4px',
													position: 'absolute',
													right: '100%',
													width: '4px',
													...(resizable ? {cursor: 'nwse-resize'} : {}),
												},
											},
										),
									]),
								],
							)
							: h(
								'div',
								{
									style: {
										alignItems: 'center',
										/*backgroundColor: (dark
											? (active
												? 'rgba(255, 255, 255, 0.16)'
												: 'rgba(255, 255, 255, 0.08)'
											)
											: (active
												? 'rgba(0, 0, 0, 0.12)'
												: 'rgba(0, 0, 0, 0.06)'
											)
										),*/
										borderColor: (dark
											? (active
												? '#fff'
												: 'rgba(255, 255, 255, 0.7)'
											)
											: (active
												? 'rgba(0, 0, 0, 0.87)'
												: 'rgba(0, 0, 0, 0.42)'
											)
										),
										borderRadius: '4px',
										borderStyle: 'dashed',
										borderWidth: '4px',
										cursor: (disabled || loading
											? undefined
											: 'pointer'
										),
										display: 'flex',
										justifyContent: 'center',
										transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)',
										bottom: 0,
										left: 0,
										position: 'absolute',
										right: 0,
										top: 0,
									},
									key: 'szrj',
								},
								[h(
									'VSlideYTransition',
									{
										props: {
											leaveAbsolute: true,
										},
									},
									[(() => {
										if (loadSuccess) {
											return h(
												'VIcon',
												{
													props: {
														color: 'success',
														size: '64px',
													},
													key: 1,
												},
												successIcon,
											);
										}
										if (loadError) {
											return h(
												'VIcon',
												{
													props: {
														color: 'error',
														size: '64px',
													},
													key: 2,
												},
												errorIcon,
											);
										}
										if (loading) {
											return h(
												'VProgressCircular',
												{
													props: {
														color: 'primary',
														indeterminate: !loadProgress,
														rotate: -90,
														size: 128,
														value: loadProgress * 100,
														width: 16,
													},
												},
												[h(
													'VBtn',
													{
														props: {
															icon: true,
															large: true,
															text: true,
														},
														on: {
															click(event) {
																event.preventDefault();
																event.stopPropagation();
															},
														},
													},
													[h(
														'VIcon',
														cancelIcon,
													)],
												)],
											);
										}
										return h(
											'VIcon',
											{
												style: uploadIconStyle,
												props: {
													color: (dark
														? 'rgba(255, 255, 255, 0.08)'
														: 'rgba(0, 0, 0, 0.06)'
													),
													size: '128px',
												},
												key: 0,
											},
											uploadIcon,
										);
									})()],
								)],
							)
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
						...(internalImage
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
						...(internalImage
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
