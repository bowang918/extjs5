Ext.define('App.view.main.Main', {
	extend : 'Ext.container.Container',
	controller : {
		xclass : 'App.view.main.MainController'
	},
	layout : 'border',
	items : [ {
		html : 'header',
		region : 'north',
		split : false,
		height : 50
	}, {
		region : 'west',
		title : 'Navigation',
		split : true
	}, {
		region : 'center',
		xtype : 'tabpanel',
		items : []
	} ]
});
