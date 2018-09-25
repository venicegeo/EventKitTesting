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
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://eventkit.geointservices.io/login?redirect=%2Fdashboard')

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_Login with GEOAxIS (1)'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/a_Disadvantaged Users (1)'))

WebUI.setEncryptedText(findTestObject('Object Repository/Page_GEOAxIS/input_password (1)'), '3f8rdfA0pZVvY+LH9tE2ZH7AQk8I3VTd')

WebUI.setText(findTestObject('Object Repository/Page_GEOAxIS/input_username (1)'), 'pzuser01@gxaws.dev')

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/input_submit (1)'))

WebUI.waitForPageLoad(120)

WebUI.waitForElementPresent(findTestObject('Object Repository/Page_EventKit/a_Create DataPack (1)'), 60)

WebUI.click(findTestObject('Object Repository/Page_EventKit/a_Create DataPack (1)'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_form-control bootstrap-t (2)'), 'bethany bea')

WebUI.click(findTestObject('Object Repository/Page_EventKit/strong_Bethany Beach (2)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/path (1)'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_exportName (2)'), 'Share Pack')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/textarea_DGI Happy Path (1)'), 'Share Pack')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_projectName (2)'), 'Share Pack')

WebUI.click(findTestObject('Object Repository/Page_EventKit/input_DigitalGlobe Imagery (Fo (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/path (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/svg_qa-BreadcrumbStepper-Navig (1)'))

WebUI.waitForElementPresent(findTestObject('Object Repository/Page_EventKit/div_COMPLETED (2)'), 3600)

WebUI.openBrowser('')

WebUI.navigateToUrl('https://eventkit.geointservices.io/login?redirect=%2Fdashboard')

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Login with GEOAxIS (2)'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/a_Disadvantaged Users (1)'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/a_PKI Certificate'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/div_jOverlay'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_Login with GEOAxIS (2)'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/a_Disadvantaged Users (1)'))

WebUI.setText(findTestObject('Object Repository/Page_GEOAxIS/input_username (1)'), 'pzuser01@gxaws.dev')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_GEOAxIS/input_password (1)'), '3f8rdfA0pZVvY+LH9tE2ZH7AQk8I3VTd')

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/input_submit (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/a_DataPack Library (1)'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_undefined-SearchDataPack'), 'Share pack')

WebUI.sendKeys(findTestObject('Object Repository/Page_EventKit/input_undefined-SearchDataPack'), Keys.chord(Keys.ENTER))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_qa-DataPackListItem-Ico'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_Share'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_MEMBERS (0)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/div_PZUSER03 Test Z pzuser03 P'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_custom-text-field'), 'pzuser02')

WebUI.click(findTestObject('Object Repository/Page_EventKit/path_1'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_custom-text-field'), 'pzuser03')

WebUI.click(findTestObject('Object Repository/Page_EventKit/svg (1)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/button_SAVE'))

