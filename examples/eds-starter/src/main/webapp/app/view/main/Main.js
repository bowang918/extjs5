Ext.define('App.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'App.view.main.Header' ],
	controller : {
		xclass : 'App.view.main.MainController'
	},
	layout : 'border',
	items : [ {
		xtype : 'appHeader',
		region : 'north',
		split : false,
		height : 50
	}, {
		region : 'west',
		width : 240,
		title : 'Navigation',
		split : true
	}, {
		region : 'center',
		xtype : 'tabpanel',
		items : []
	} ]
});
