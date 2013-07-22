var Klikkmeg = ( function(module){
	
	module.Test = function(resultObject){
		resultObject.prepend(Date() + "<br/>");
	};
	
	return module;
}(Klikkmeg || {}) );