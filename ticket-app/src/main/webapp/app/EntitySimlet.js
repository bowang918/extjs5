Ext.define('Ticket.EntitySimlet', {
	extend : 'Ext.ux.ajax.JsonSimlet',
	alias : 'simlet.entity',

	doPost : function(ctx) {
		var result = this.callParent(arguments), o = this.processData(Ext
				.decode(ctx.xhr.body)), item = this.getById(this.data, o.id,
				true), key;

		for (key in o) {
			item[key] = o[key];
		}

		result.responseText = Ext.encode(item);
		return result;
	},

	processData : Ext.identityFn,

	getData : function(ctx) {
		var params = ctx.params;

		if ('id' in params) {
			return this.getById(this.data, params.id);
		}

		delete this.currentOrder;
		return this.callParent(arguments);
	},

	getById : function(data, id) {
		var len = data.length, i, item;

		for (i = 0; i < len; ++i) {
			item = data[i];
			if (item.id === id) {
				return item;
			}
		}
		return null;
	}
});