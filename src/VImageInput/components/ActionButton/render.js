import {
	h,
	resolveComponent,
} from 'vue';

export default function({
	disabled,
	icon,
	onClick,
}) {
	let {disabled} = parent;
	let {icon} = props;
	let VBtn = resolveComponent('VBtn')
	let VIcon = resolveComponent('VIcon')
	return h(
		VBtn,
		{
			class: 'ma-1',
			disabled,
			flat: true,
			icon: true,
			onClick,
		},
		[h(
			VIcon,
			icon,
		)],
	);
}
