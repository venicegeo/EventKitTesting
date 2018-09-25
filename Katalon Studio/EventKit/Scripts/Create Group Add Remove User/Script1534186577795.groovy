import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl('http://eventkit.geointservices.io/login?redirect=%2Fdashboard')

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Login with GEOAxIS (3)'))

WebUI.click(findTestObject('Page_GEOAxIS/a_Disadvantaged Users'))

WebUI.setText(findTestObject('Page_GEOAxIS/input_username'), 'pzuser01@gxaws.dev')

WebUI.setEncryptedText(findTestObject('Page_GEOAxIS/input_password'), '3f8rdfA0pZVvY+LH9tE2ZH7AQk8I3VTd')

WebUI.click(findTestObject('Page_GEOAxIS/input_submit'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/a_Members and Groups'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_NEW GROUP'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_custom-text-field (1)'), 'PZUSER Group')

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_SAVE (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_PZUSER Group'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_All (47)'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_undefined-SearchUsers-un'), 'pzuser')

WebUI.sendKeys(findTestObject('Object Repository/Page_EventKit/input_undefined-SearchUsers-un'), Keys.chord(Keys.ENTER))

WebUI.click(findTestObject('Object Repository/Page_EventKit/path (2)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_Username A-Z'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_Add to Existing Group'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/svg (2)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_SAVE (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_Add to Existing Group'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/svg (2)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_SAVE (1)'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_undefined-SearchUsers-un'), '')

WebUI.closeBrowser()

