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

WebUI.navigateToUrl('https://eventkit.geointservices.io/login?redirect=%2Fdashboard')

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Login with GEOAxIS (1)'))

WebUI.click(findTestObject('Page_GEOAxIS/a_Disadvantaged Users'))

WebUI.setText(findTestObject('Page_GEOAxIS/input_username'), 'pzuser02@gxaws.dev')

WebUI.setEncryptedText(findTestObject('Page_GEOAxIS/input_password'), '3f8rdfA0pZVvY+LH9tE2ZH7AQk8I3VTd')

WebUI.click(findTestObject('Page_GEOAxIS/input_submit'))

WebUI.delay(60)

WebUI.waitForElementClickable(findTestObject('Page_EventKit/button_Create DataPack'), 60)

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Create DataPack'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_form-control bootstrap-t (1)'), 'bethany beach')

WebUI.click(findTestObject('Object Repository/Page_EventKit/strong_Bethany Beach (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_exportName (1)'), 'Clone Test')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_projectName (1)'), 'Clone Test')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/textarea_Clone Tes'), 'Clone Test')

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_DigitalGlobe Imagery (Fou'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.waitForElementPresent(findTestObject('Page_EventKit/div_COMPLETED'), 1200)

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_COMPLETED (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_CLONE'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Clone (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_exportName (1)'), 'Clone Test 2')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/textarea_Clone Test'), 'Clone Test ')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/textarea_Clone Test_1'), 'Clone Test 2')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_projectName (1)'), 'Clone Test 2')

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Next'))

WebUI.waitForElementPresent(findTestObject('Page_EventKit/div_COMPLETED'), 1200)

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_DELETE'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Delete (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/a_Clone Test'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_DELETE'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Delete (1)'))

