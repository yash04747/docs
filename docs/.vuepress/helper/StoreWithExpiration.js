export default class StoreWithExpiration{
	static set(key, val, exp) {
		var obj = {val:val, exp:exp, time:new Date().getTime()};
		window.localStorage.setItem(key, JSON.stringify(obj));
	}
	static get(key) {
		var info = JSON.parse(window.localStorage.getItem(key));
	    if (!info) {
	        return null;
	    }

	    if (new Date().getTime() - info.time > info.exp) {
	      return null;
	    }
	    return info.val
	}
};
