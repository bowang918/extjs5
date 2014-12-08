Ext.define('App.view.main.Header', {
	extend : 'Ext.container.Container',
	xtype : 'appHeader',
	cls : 'appHeader',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	cls : 'appHeader',
	defaults : {
		margins : {
			top : 5,
			right : 0,
			bottom : 5,
			left : 0
		}
	},
	items : [ {
		html : 'Starter',
		cls : 'appHeaderTitle'
	}, , {
		xtype : 'tbspacer',
		flex : 1
	} ]
});
