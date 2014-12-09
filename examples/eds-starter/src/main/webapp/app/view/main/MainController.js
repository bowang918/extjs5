Ext.define('App.view.main.MainController', {
	extend : 'Ext.app.ViewController',
	
	onNavigationTreeSelectionchange : function(tree, selected, eOpts) {
		if(selected && selected.length === 1){
			var node = selected[0], view = node.data.view;
			if (view) {
				var tabPanel = this.lookupReference('appMainTabpanel'), treePath = node.getPath(), card = tabPanel.child('panel[treePath=' + treePath + ']');
				if (!card) {
					card = Ext.create(view, {
						treePath : treePath,
						title : node.data.text,
						closable : true,
						icon : node.data.icon
					});
					tabPanel.add(card);
				}
				tabPanel.setActiveTab(card);
			}
		}
	},
	onMainTabPanelTabChange : function( tabPanel, newCard, oldCard, eOpts ){
		if(!oldCard||newCard.treePath!=oldCard.treePath){
			var navigationTree = this.lookupReference('appNavigationTree');
			navigationTree.suspendEvents();
			navigationTree.selectPath(newCard.treePath);
			navigationTree.resumeEvents();
		}
	},
	onMainTabPanelRemove : function( tabPanel, component, eOpts ){
		var navigationTree = this.lookupReference('appNavigationTree');
		if (tabPanel.items.length === 0) {
			navigationTree.getSelectionModel().deselectAll();
		}
	}
});
