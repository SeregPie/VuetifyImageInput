import {Eqjcsyaa} from '../';

let {document} = globalThis;

export default function ibaxrrrq(
	fn: Eqjcsyaa<FileList>,
	{
		accept = '',
		multiple = false,
	}: Partial<{
		accept: string;
		multiple: boolean;
	}> = {},
): void {
	let input = document.createElement('input');
	input.type = 'file';
	input.accept = accept;
	input.multiple = multiple;
	input.addEventListener('change', () => {
		fn(input.files!);
	});
	input.click();
}
