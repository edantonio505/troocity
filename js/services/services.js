angular.module('App')

// Create Service to get Parameters from url get request
.factory('PrmsSrv', function(){
	var Params = { 
		getParams: function(name, url){
			name = name.replace(/[\[\]]/g, "\\$&");
			var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			    results = regex.exec(url);
			if (!results) return null;
			if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
	};
	return Params;
});