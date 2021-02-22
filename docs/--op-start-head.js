if (!window.__offlineMapping) {
	window.__offlineMapping = {
		"http://atticgreek.org/paradigms/paradigmsVerbs1.html": "paradigmsVerbs1.html",
		"http://atticgreek.org/paradigms/paradigmsVerbs3.html": "paradigmsVerbs3.html",
		"http://atticgreek.org/paradigms/paradigmsVerbs2.html": "paradigmsVerbs2.html",
		"http://atticgreek.org/index.html": "index.html",
		"http://atticgreek.org/paradigms/paradigmsAdjectives.html": "paradigmsAdjectives.html",
		"http://atticgreek.org/paradigms/paradigmsPronouns.html": "paradigmsPronouns.html",
		"http://atticgreek.org/paradigms/paradigmsNouns.html": "paradigmsNouns.html",
	};

	(function() {
		var swapLink = function(a) {
			var url = a.href,
				key = url.split("#")[0],
				hash = url.substr(key.length);
			if (__offlineMapping[key]) {
				a.setAttribute("data-offline-href", url);
				a.href = __offlineMapping[key] + hash;
			}
		};

		document.addEventListener("DOMContentLoaded", function() {
			[].forEach.call(document.querySelectorAll("a[href^=http]"), swapLink);
		});

		document.addEventListener("click", function(e) {
			var a = e.target;
			if (a.tagName !== "A" || a.protocol === "file:") return;
			swapLink(a);
		}, false);
	})();
}
