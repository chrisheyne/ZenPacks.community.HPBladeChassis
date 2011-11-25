from zope.interface import implements
from Products.Zuul.infos.component import ComponentInfo
from Products.Zuul.decorators import info
from Products.Zuul.infos import ProxyProperty
from ZenPacks.community.HPBladeChassis import interfaces

class BladeServerInfo(ComponentInfo):
	implements(interfaces.IBladeServerInfo)
	
	bsId = ProxyProperty("bsId")
	bsDisplayName = ProxyProperty("bsDisplayName")
	bsSerialNum = ProxyProperty("bsSerialNum")
	bsCPUCount = ProxyProperty("bsCPUCount")
	bsInstalledRam = ProxyProperty("bsInstalledRam")
	bsIloIp = ProxyProperty("bsIloIp")

	@property
	def bladeHealth(self):
		return self._object.getRRDValue("bladeHealth")
	
	@property
	def bladePower(self):
		return self._object.getRRDValue("bladePower")

	@property
	@info
	def managedDevice(self):
		return self._object.managedDevice()


class BladeChassisInterconnectInfo(ComponentInfo):
	implements(interfaces.IBladeChassisInterconnectInfo)
	
	bciNumber = ProxyProperty("bciNumber")
	bciType = ProxyProperty("bciType")
	bciProductName = ProxyProperty("bciProductName")
	bciStatus = ProxyProperty("bciStatus")
	bciMgmtIp = ProxyProperty("bciMgmtIp")
	bciSerialNum = ProxyProperty("bciSerialNum")
	bciPartNumber = ProxyProperty("bciPartNumber")
	bciSparePartNumber = ProxyProperty("bciSparePartNumber")


class BladeChassisFanInfo(ComponentInfo):
	implements(interfaces.IBladeChassisFanInfo)
	
	bcfNumber = ProxyProperty("bcfNumber")
	bcfProductName = ProxyProperty("bcfProductName")
	bcfStatus = ProxyProperty("bcfStatus")
	bcfPartNumber = ProxyProperty("bcfPartNumber")
	bcfSparePartNumber = ProxyProperty("bcfSparePartNumber")
	bcfProductVersion = ProxyProperty("bcfProductVersion")


class BladeChassisPsuInfo(ComponentInfo):
	implements(interfaces.IBladeChassisPsuInfo)
	
	bcpNumber = ProxyProperty("bcpNumber")
	bcpProductName = ProxyProperty("bcpProductName")
	bcpStatus = ProxyProperty("bcpStatus")
	bcpCapacity = ProxyProperty("bcpCapacity")
	bcpSerialNum = ProxyProperty("bcpSerialNum")
	bcpPartNumber = ProxyProperty("bcpPartNumber")
	bcpSparePartNumber = ProxyProperty("bcpSparePartNumber")		
	bcpProductVersion = ProxyProperty("bcpProductVersion")
