export default class StoreWithExpiration{
	static set(field, key, val, exp) {
		var obj = {val:val, exp:exp, time:new Date().getTime()};
		window.localStorage.setItem(field + "_" + key, JSON.stringify(obj));
	}
	static get(field, key) {
		var info = JSON.parse(window.localStorage.getItem(field + "_" + key));
		if (!info) {
			return null;
		}

		if (new Date().getTime() - info.time > info.exp) {
		  return null;
		}
		return info.val
	}
};
