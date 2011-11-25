from Products.Zuul.interfaces import Attribute, IComponentInfo
from Products.Zuul.form import schema
from Products.Zuul.utils import ZuulMessageFactory as _t


class IBladeServerInfo(IComponentInfo):
	"""
Info adapter for Blade Server component
"""
	bsId = schema.Text(title=u"ID", readonly=True, group='Details')
	bladeHealth = schema.Text(title=u"Health", readonly=True, group='Details') 
	bladePower = schema.Text(title=u"Power", readonly=True, group='Details')
	bsDisplayName = schema.Text(title=u"Name", readonly=True, group='Details')
	bsSerialNum = schema.Text(title=u"Serial Num", readonly=True, group='Details')
	bsCPUCount = schema.Text(title=u"CPUs", readonly=True, group='Details')
	bsInstalledRam = schema.Text(title=u"RAM", readonly=True, group='Details')
	bsIloIp = schema.Text(title=u"ILO IP Address", readonly=True, group='Details')
	
	managedDevice = schema.Entity(title=u"Managed Device", readonly=True, group='Details')

class IBladeChassisInterconnectInfo(IComponentInfo):
	"""
Info adapter for Blade Chassis Interconnect component
"""
	bciNumber = schema.Text(title=u"Bay", readonly=True, group='Details')
	bciType = schema.Text(title=u"Type", readonly=True, group='Details')
	bciProductName = schema.Text(title=u"Product Name", readonly=True, group='Details')
	bciStatus = schema.Text(title=u"Status", readonly=True, group='Details')
	bciMgmtIp = schema.Text(title=u"Management IP", readonly=True, group='Details')
	bciSerialNum = schema.Text(title=u"Serial Num", readonly=True, group='Details')
	bciPartNumber = schema.Text(title=u"Part Num", readonly=True, group='Details')
	bciSparePartNumber = schema.Text(title=u"Spare Part Num", readonly=True, group='Details')
	
class IBladeChassisFanInfo(IComponentInfo):
	"""
Info adapter for Blade Chassis Fan component
"""
	bcfNumber = schema.Text(title=u"Fan", readonly=True, group='Details')
	bcfProductName = schema.Text(title=u"Product Name", readonly=True, group='Details')
	bcfStatus = schema.Text(title=u"Status", readonly=True, group='Details')
	bcfPartNumber = schema.Text(title=u"Part Num", readonly=True, group='Details')
	bcfSparePartNumber = schema.Text(title=u"Spare Part Num", readonly=True, group='Details')
	bcfProductVersion = schema.Text(title=u"Version", readonly=True, group='Details')
	
class IBladeChassisPsuInfo(IComponentInfo):
	"""
Info adapter for Blade Chassis PSU component
"""
	bcpNumber = schema.Text(title=u"PSU", readonly=True, group='Details')
	bcpProductName = schema.Text(title=u"Product Name", readonly=True, group='Details')
	bcpStatus = schema.Text(title=u"Status", readonly=True, group='Details')
	bcpCapacity = schema.Text(title=u"Capacity", readonly=True, group='Details')
	bcpSerialNum = schema.Text(title=u"Serial Num", readonly=True, group='Details')
	bcpPartNumber = schema.Text(title=u"Part Num", readonly=True, group='Details')
	bcpSparePartNumber = schema.Text(title=u"Spare Part Num", readonly=True, group='Details')		
	bcpProductVersion = schema.Text(title=u"Version", readonly=True, group='Details')
