export type nullish = undefined | null;

export type MaybeUndefined<T> = undefined | T;

export type MaybeNull<T> = null | T;

export type MaybeNullish<T> = nullish | T;

export type NonUndefined<T> = T extends undefined ? never : T;

export type NonNull<T> = T extends null ? never : T;

export type NonNullish<T> = NonNullable<T>;

export type Optional<T> = Partial<T>;

export type Writable<T> = {
	-readonly [K in keyof T]: T[K];
};

export type MarkOptional<T, K extends keyof T> = Omit<T, K> &
	Optional<Pick<T, K>>;

export type MarkRequired<T, K extends keyof T> = Omit<T, K> &
	Required<Pick<T, K>>;

export type MarkReadonly<T, K extends keyof T> = Omit<T, K> &
	Readonly<Pick<T, K>>;

export type MarkWritable<T, K extends keyof T> = Omit<T, K> &
	Writable<Pick<T, K>>;

export type AnyKey = keyof any;

export type AnyFunction = (...args: any) => any;

export type AnyConstructor = new (...args: any) => any;

export type Dict<T> = Record<AnyKey, T>;

export type Supplier<T> = () => T;

export type AsyncSupplier<T> = Supplier<Promise<T>>;

export type Consumer<T> = (t: T) => void;

/*
export type Thunk<R> = () => R;
export type Consumer<E> = UnaryFunction<E, void>;
export type UnaryFunction<E, R> = (e: E) => R;
export type Mapping<E, R> = UnaryFunction<E, R>;
export type BinaryFunction<E, F, R> = (e: E, f: F) => R;


export type NumberProjection<E> = UnaryFunction<E, number>;
export type StringProjection<E> = UnaryFunction<E, string>;
export type KeyProjection<E> = StringProjection<E> | NumberProjection<E>;
export type PropertyProjection<E ,F extends string|number = string|number> = UnaryFunction<E, F>;
export type Predicate<E> = (e: E) => boolean;
export type Comparer<E> = BinaryFunction<E, E, number>;
export type Reduction<E> = BinaryFunction<E, E, E>;
export type Folder<E, F> = BinaryFunction<F, E, F>;
export type Mutation<E> = UnaryFunction<E, E>;

export interface Dictionary<E> {
  [name: string]: E;
}


export type Nullish = null | undefined;
export type MaybeNullish<T> = T | Nullish;

export type Tuple<E, F> = readonly [E, F];
export type Triple<E, F,G> = readonly [E, F,G];

export type Gen<E> = Generator<E, void, unknown>;
export type Seq<E> = { [Symbol.iterator](): Gen<E> } | Iterable<E>
*/

export type MaybePromise<T> = T | Promise<T> | PromiseLike<T>;

export type Eqjcsyaa<T> = {
	(v: T): any;
};

export type Vzrunpio = {
	(): any;
};
