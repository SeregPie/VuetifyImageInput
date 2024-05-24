declare const d: {
	(
		fn: {(v: FileList): any},
		options: Partial<{
			accept: string;
			multiple: boolean;
		}>,
	): void;
};
export default d;
