import {isFunction} from '@vue/shared';
import {customRef, isRef} from 'vue';

function dnjvpnpu(v) {
	if (isFunction(v)) {
		return v;
	}
	if (isRef(v)) {
		return () => v.value;
	}
	return () => v;
}

function stored(
	key,
	{
		//
		default: defaultValue = null,
		session = false,
		type = JSON,
	} = {},
) {
	let getKey = dnjvpnpu(key);
	let getDefaultValue = dnjvpnpu(defaultValue);
	let isSession = dnjvpnpu(session);
	let getStorage = () => (isSession() ? sessionStorage : localStorage);
	let {parse, stringify} = type;
	return customRef((track, trigger) => ({
		get() {
			track();
			let storage = getStorage();
			let key = getKey();
			let value = storage.getItem(key);
			if (value == null) {
				value = getDefaultValue();
			} else {
				value = parse(value);
			}
			return value;
		},
		set(value) {
			let storage = getStorage();
			let key = getKey();
			if (value == null) {
				storage.removeItem(key);
			} else {
				value = stringify(value);
				storage.setItem(key, value);
			}
			trigger();
		},
	}));
}

export {stored};
