import {WatchSource} from 'vue';

declare const sessionStorage: Storage;

declare const localStorage: Storage;

// todo: rename
type Uqdgdmig<T> = T | WatchSource<T>;

type Qcxlpkdl<T> = Partial<{
	default: Uqdgdmig<T>;
	session: Uqdgdmig<boolean>;
}>;

// todo: rename
type Yavuyuta<T> = Partial<{
	default: Uqdgdmig<T>;
	session: Uqdgdmig<boolean>;
	type: {
		parse(v: string): T;
		stringify(v: T): string;
	};
}>;

declare function stored<T>(key: Uqdgdmig<string>, options?: Yavuyuta<T>): Ref<T>;
declare function stored(
	key: Uqdgdmig<string>,
	options: {
		type: BooleanConstructor;
	} & Pick<Yavuyuta<boolean>, 'default' | 'session'>,
): Ref<boolean>;
declare function stored(
	key: Uqdgdmig<string>,
	options: {
		type: NumberConstructor;
	} & Pick<Yavuyuta<number>, 'default' | 'session'>,
): Ref<number>;
declare function stored(
	key: Uqdgdmig<string>,
	options: {
		type: StringConstructor;
	} & Pick<Yavuyuta<string>, 'default' | 'session'>,
): Ref<string>;

export {
	//
	localStorage,
	sessionStorage,
	stored,
};
