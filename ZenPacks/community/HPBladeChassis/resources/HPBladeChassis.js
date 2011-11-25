(function() {

	var ZC = Ext.ns('Zenoss.component');

	ZC.BladeServerPanel = Ext.extend(ZC.ComponentGridPanel, {
		constructor : function(config) {
			config = Ext.applyIf(config || {}, {
				componentType : 'BladeServer',
				fields : [ {
					name : 'uid'
				}, {
					name : 'name'
				}, {
					name : 'severity'
				}, {
					name : 'status'
				}, {
					name : 'description'
				}, {
					name : 'hasMonitor'
				}, {
					name : 'monitor'
				}, {
					name : 'monitored'
				}, {
					name : 'locking'
				}, {
					name : 'bladeHealth'
				}, {
					name : 'bladePower'
				}, {
					name : 'bsDisplayName'
				}, {
					name : 'bsSerialNum'
				}, {
					name : 'bsCPUCount'
				}, {
					name : 'bsInstalledRam'
				}, {
					name : 'bsIloIp'
				}, {
					name : 'managedDevice'
				} ],
				autoExpandColumn: 'managedDevice',
				columns : [ {
					id : 'severity',
					dataIndex : 'severity',
					header : _t('Events'),
					renderer : Zenoss.render.severity,
					width : 60
				}, {
					id : 'name',
					dataIndex : 'name',
					header : _t('Server'),
					sortable : true,
					width : 200
				}, {
					id : 'managedDevice',
					dataIndex : 'managedDevice',
					header : _t('Name'),
					renderer : function(d) {
						if (d && d.uid) {
							return Zenoss.render.Device(d.uid, d.name);
						} else {
							return d;
						}
					},
					sortable : true
				}, {
					id : 'bladeHealth',
					dataIndex : 'bladeHealth',
					header : _t('Health'),
					renderer : function(s) {
						if (s == 0) {
							return Zenoss.render.upDownUnknown('up');
						} else if (s > 0) {
							return Zenoss.render.upDownUnknown('down');
						} else {							
							return Zenoss.render.upDownUnknown('unknown');
						}
					},
					sortable : true,
					width : 60
				}, {
					id : 'bladePower',
					dataIndex : 'bladePower',
					header : _t('Power'),
					renderer : function(s) {
						if (s > 0) {
							return Zenoss.render.upDownUnknown('up');
						} else if (s == 0) {
							return Zenoss.render.upDownUnknown('down');
						} else {							
							return Zenoss.render.upDownUnknown('unknown');
						}
					},
					sortable : true,
					width : 60
				}, {					
					id : 'bsSerialNum',
					dataIndex : 'bsSerialNum',
					header : _t('Serial #'),
					sortable : true
				}, {
					id : 'bsCPUCount',
					dataIndex : 'bsCPUCount',
					header : _t('CPUs'),
					sortable : true
				}, {
					id : 'bsInstalledRam',
					dataIndex : 'bsInstalledRam',
					header : _t('RAM'),
					sortable : true
				}, {
					id : 'bsIloIp',
					dataIndex : 'bsIloIp',
					header : _t('ILO IP Address'),
					renderer : Zenoss.render.ipAddress,
					sortable : true
				} ]
			});
			ZC.BladeServerPanel.superclass.constructor.call(this, config);
		}
	});
	Ext.reg('BladeServerPanel', ZC.BladeServerPanel);
	ZC.registerName('BladeServer', _t('Blade Server'), _t('Blade Servers'));

	ZC.BladeChassisInterconnectPanel = Ext.extend(ZC.ComponentGridPanel, {
		constructor : function(config) {
			config = Ext.applyIf(config || {}, {
				componentType : 'BladeChassisInterconnect',
				layout : 'fit',
				fields : [ {
					name : 'uid'
				}, {
					name : 'name'
				}, {
					name : 'severity'
				}, {
					name : 'status'
				}, {
					name : 'description'
				}, {
					name : 'hasMonitor'
				}, {
					name : 'monitor'
				}, {
					name : 'monitored'
				}, {
					name : 'locking'
				}, {
					name : 'bciNumber'
				}, {
					name : 'bciType'
				}, {
					name : 'bciProductName'
				}, {
					name : 'bciStatus'
				}, {
					name : 'bciMgmtIp'
				}, {
					name : 'bciSerialNum'
				}, {
					name : 'bciPartNumber'
				}, {
					name : 'bciSparePartNumber'
				}, ],
				autoExpandColumn: 'bciProductName',
				columns : [ {
					id : 'severity',
					dataIndex : 'severity',
					header : _t('Events'),
					renderer : Zenoss.render.severity,
					width : 50
				}, {
					id : 'name',
					dataIndex : 'name',
					header : _t('Bay'),
					sortable : true,
					width : 40
				}, {
					id : 'bciType',
					dataIndex : 'bciType',
					header : _t('Type'),
					sortable : true,
					width: 50
				}, {
					id : 'bciProductName',
					dataIndex : 'bciProductName',
					header : _t('Product Name'),
					sortable : true,
					width: 300
				}, {
					id : 'bciMgmtIp',
					dataIndex : 'bciMgmtIp',
					header : _t('Management IP'),
					renderer : Zenoss.render.ipAddress,
					sortable : true
				}, {
					id : 'bciSerialNum',
					dataIndex : 'bciSerialNum',
					header : _t('Serial Num'),
					sortable : true
				}, {
					id : 'bciPartNumber',
					dataIndex : 'bciPartNumber',
					header : _t('Part Num'),
					sortable : true,
					width: 120
				}, {
					id : 'bciSparePartNumber',
					dataIndex : 'bciSparePartNumber',
					header : _t('Spare Part Num'),
					sortable : true,
					width: 100
				} ]
			});
			ZC.BladeChassisInterconnectPanel.superclass.constructor.call(this,
					config);
		}
	});
	Ext.reg('BladeChassisInterconnectPanel', ZC.BladeChassisInterconnectPanel);
	ZC
			.registerName('BladeChassisInterconnect',
					_t('Blade Chassis Interconnect'),
					_t('Blade Chassis Interconnects'));

	ZC.BladeChassisFanPanel = Ext.extend(ZC.ComponentGridPanel, {
		constructor : function(config) {
			config = Ext.applyIf(config || {}, {
				componentType : 'BladeChassisFan',
				layout : 'fit',
				fields : [ {
					name : 'uid'
				}, {
					name : 'name'
				}, {
					name : 'severity'
				}, {
					name : 'status'
				}, {
					name : 'description'
				}, {
					name : 'hasMonitor'
				}, {
					name : 'monitor'
				}, {
					name : 'monitored'
				}, {
					name : 'locking'
				}, {
					name : 'bcfNumber'
				}, {
					name : 'bcfProductName'
				}, {
					name : 'bcfStatus'
				}, {
					name : 'bcfPartNumber'
				}, {
					name : 'bcfSparePartNumber'
				}, {
					name : 'bcfProductVersion'
				}, ],
				autoExpandColumn : 'bcfProductName',
				columns : [ {
					id : 'severity',
					dataIndex : 'severity',
					header : _t('Events'),
					renderer : Zenoss.render.severity,
					width : 60
				}, {
					id : 'name',
					dataIndex : 'name',
					header : _t('Fan'),
					sortable : true,
					width : 60
				}, {
					id : 'bcfProductName',
					dataIndex : 'bcfProductName',
					header : _t('Product Name'),
					sortable : true
				}, {
					id : 'bcfStatus',
					dataIndex : 'bcfStatus',
					header : _t('Status'),
					sortable : true
				}, {
					id : 'bcfPartNumber',
					dataIndex : 'bcfPartNumber',
					header : _t('Part Num'),
					sortable : true
				}, {
					id : 'bcfSparePartNumber',
					dataIndex : 'bcfSparePartNumber',
					header : _t('Spare Part Num'),
					sortable : true
				}, {
					id : 'bcfProductVersion',
					dataIndex : 'bcfProductVersion',
					header : _t('Version'),
					sortable : true
				} ]
			});
			ZC.BladeChassisFanPanel.superclass.constructor.call(this, config);
		}
	});
	Ext.reg('BladeChassisFanPanel', ZC.BladeChassisFanPanel);
	ZC.registerName('BladeChassisFan', _t('Blade Chassis Fan'),
			_t('Blade Chassis Fans'));

	ZC.BladeChassisPsuPanel = Ext.extend(ZC.ComponentGridPanel, {
		constructor : function(config) {
			config = Ext.applyIf(config || {}, {
				componentType : 'BladeChassisPsu',
				layout : 'fit',
				fields : [ {
					name : 'uid'
				}, {
					name : 'name'
				}, {
					name : 'severity'
				}, {
					name : 'status'
				}, {
					name : 'description'
				}, {
					name : 'hasMonitor'
				}, {
					name : 'monitor'
				}, {
					name : 'monitored'
				}, {
					name : 'locking'
				}, {
					name : 'bcpNumber'
				}, {
					name : 'bcpProductName'
				}, {
					name : 'bcpStatus'
				}, {
					name : 'bcpCapacity'
				}, {
					name : 'bcpPartNumber'
				}, {
					name : 'bcpSparePartNumber'
				}, {
					name : 'bcpProductVersion'
				}, ],
				autoExpandColumn : 'bcpProductName',
				columns : [ {
					id : 'severity',
					dataIndex : 'severity',
					header : _t('Events'),
					renderer : Zenoss.render.severity,
					width : 60
				}, {
					id : 'name',
					dataIndex : 'name',
					header : _t('PSU'),
					sortable : true,
					width : 60
				}, {
					id : 'bcpProductName',
					dataIndex : 'bcpProductName',
					header : _t('Product Name'),
					sortable : true
				}, {
					id : 'bcpStatus',
					dataIndex : 'bcpStatus',
					header : _t('Status'),
					sortable : true
				}, {
					id : 'bcpCapacity',
					dataIndex : 'bcpCapacity',
					header : _t('Capacity'),
					sortable : true
				}, {
					id : 'bcpPartNumber',
					dataIndex : 'bcpPartNumber',
					header : _t('Part Num'),
					sortable : true
				}, {
					id : 'bcpSparePartNumber',
					dataIndex : 'bcpSparePartNumber',
					header : _t('Spare Part Num'),
					sortable : true
				}, {
					id : 'bcpProductVersion',
					dataIndex : 'bcpProductVersion',
					header : _t('Version'),
					sortable : true
				} ]
			});
			ZC.BladeChassisPsuPanel.superclass.constructor.call(this, config);
		}
	});
	Ext.reg('BladeChassisPsuPanel', ZC.BladeChassisPsuPanel);
	ZC.registerName('BladeChassisPsu', _t('Blade Chassis PSU'),
			_t('Blade Chassis PSUs'));
})();