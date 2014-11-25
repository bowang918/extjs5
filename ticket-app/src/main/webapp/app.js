Ext.Loader.setPath({
	'Ticket' : 'app',
	'Ext.ux' : 'resources/ext/5.0.1/ux'
});

Ext.application({
	name : 'Ticket',
	requires : [ 'Ext.app.*'],
	extend : 'Ticket.Application'
});
