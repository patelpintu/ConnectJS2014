var args = arguments[0] || {};
var abextras = require('com.alcoapps.actionbarextras');

function doopen(evt){
	var w=evt.source;

	var dropdown = abextras.createDropdown({
	    titles: ["Window 1","Window 2"]
	});

	dropdown.addEventListener('change',function(evt){
		$.tabs.currentPage=evt.index;
	})
}