// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
	paths: {
		jquery: 	'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 	'libs/backbone/backbone-optamd3-min',
		text: 		'libs/require/text',
		cs: 		'libs/require/cs'
	}

});

require(['cs!views/app'], function(AppView){
	var appView = new AppView;
});
