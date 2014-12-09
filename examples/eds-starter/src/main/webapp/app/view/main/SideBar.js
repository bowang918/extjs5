Ext.define('App.view.main.SideBar', {
	extend : 'Ext.tree.Panel',
	xtype : 'appSideBar',
	title : 'Navigation',
	width : 240,
	rootVisible : false,
	root : {
		expanded : true,
		children : [ {
			id: 1,
			text : "Child 1",
			expanded : true,
			children : [ {
				id: 11,
				text : "Child 11",
				leaf : true
			}, {
				id: 12,
				text : "Child 12",
				leaf : true,
				view : 'Ext.form.Panel'
			} ]
		}, {
			text : "Child 2",
			id: 2,
			expanded : true,
			children : [ {
				id: 21,
				text : "Child 21",
				expanded : true,
				children : [ {
					id: 211,
					text : "Child 211",
					view : 'Ext.grid.Panel',
					leaf : true
				} ]
			}, {
				id: 22,
				text : "Child 22",
				leaf : true
			} ]
		} ]
	},
	listeners : {
		selectionchange : 'onNavigationTreeSelectionchange'
	}
});
