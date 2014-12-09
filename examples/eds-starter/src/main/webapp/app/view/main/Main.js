Ext.define('App.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'App.view.main.Header', 'App.view.main.SideBar',
			'App.view.main.MainController' ],
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
		xtype : 'appSideBar',
		reference : 'appNavigationTree',
		split : true
	}, {
		region : 'center',
		reference : 'appMainTabpanel',
		xtype : 'tabpanel',
		items : [],
		listeners:{
			tabchange:'onMainTabPanelTabChange',
			remove:'onMainTabPanelRemove'
		}
	} ]
});
