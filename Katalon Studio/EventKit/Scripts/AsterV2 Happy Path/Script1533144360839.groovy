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

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_Login with GEOAxIS'))

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/a_Disadvantaged Users'))

WebUI.setEncryptedText(findTestObject('Object Repository/Page_GEOAxIS/input_password'), '3f8rdfA0pZVvY+LH9tE2ZH7AQk8I3VTd')

WebUI.setText(findTestObject('Object Repository/Page_GEOAxIS/input_username'), 'pzuser01@gxaws.dev')

WebUI.click(findTestObject('Object Repository/Page_GEOAxIS/input_submit'))

WebUI.waitForPageLoad(120)

WebUI.waitForElementPresent(findTestObject('Page_EventKit/a_Create DataPack'), 60)

WebUI.click(findTestObject('Object Repository/Page_EventKit/a_Create DataPack'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_form-control bootstrap-t'), 'bethany bea')

WebUI.click(findTestObject('Object Repository/Page_EventKit/strong_Bethany Beach'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/path'))

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_exportName'), 'Aster Happy Path')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/textarea_DGI Happy Path'), 'Aster Happy Path')

WebUI.setText(findTestObject('Object Repository/Page_EventKit/input_projectName'), 'Aster Happy Path')

WebUI.click(findTestObject('Page_EventKit/input_Aster Elevation (V2)'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/path'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/svg_qa-BreadcrumbStepper-Navig'))

WebUI.waitForElementPresent(findTestObject('Page_EventKit/div_COMPLETED'), 3600)

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_DELETE'))

WebUI.click(findTestObject('Object Repository/Page_EventKit/span_Delete (1)'))

WebUI.waitForElementPresent(findTestObject('Page_EventKit/a_Log Out'), 60)

WebUI.closeBrowser()

