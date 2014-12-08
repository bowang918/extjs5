Ext.define('App.Application', {
	extend : 'Ext.app.Application',
	name : 'App',
	constructor : function(config) {
		var me = this;
		me.callParent(arguments);
	},
	/**
	 * A template method that is called when your application boots. It is
	 * called before the Application's launch function is executed so gives a
	 * hook point to run any code before your Viewport is created.
	 */
	init : function(application) {

	},
	/**
	 * Called automatically when the page has completely loaded. This is an
	 * empty function that should be overridden by each application that needs
	 * to take action on page load.
	 */
	launch : function() {

	},
	/**
	 * A template method like init, but called after the viewport is created.
	 * This is called after the launch method of Application is executed.
	 */
	onLaunch : function(application) {

	},
});
