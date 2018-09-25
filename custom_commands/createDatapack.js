exports.command = function(client,nameOfAOI,numberOnList,dataProvider,otherOptions){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);

    var providerNumber;
    var counter = 1;
    switch(dataProvider){
        case "DigitalGlobe Imagery (Foundation GEOINT)":
            providerNumber=2;
            break;
        case "DigitalGlobe (ImageryTileService)":
            providerNumber=3;
            break;
        case "NOME":
            providerNumber=4;
            break;
        case "OpenStreetMap Data (Themes)":
            providerNumber=5;
            break;
        case "OpenStreetMap Tiles":
            providerNumber=6;
            break;
        case "Aster Elevation (V2)":
            providerNumber=1;
    }

    client
        .elementPresent(`.qa-BreadcrumbStepper-step1Label`,`CSS`,`Step one label is showing`)
        .click(`.bootstrap-typeahead-input-main`, `Click AOI input`)
        .changeInput(`.bootstrap-typeahead-input-main`,`CSS`,nameOfAOI, `Change input to...`+nameOfAOI)
        .click(`.bootstrap-typeahead-menu > :nth-child(`+numberOnList+`) .qa-TypeaheadMenuItem-name`, `CSS`, `Click AOI from finder`)
        .click(`[id=Next]`, `CSS`, `Click move to next step`)
        .click(`[name=exportName]`, `CSS`, `Click datapack name`)
        .changeInput(`[name=exportName]`, `CSS`, dataProvider+` Happy Path `, `Change input to... `+dataProvider+` Happy Path `)
        .click(`[name=datapackDescription]`, `CSS`, `Click datapack description`)
        .changeInput(`[name=datapackDescription]`, `CSS`, dataProvider+` Happy Path `, `Change input to... `+dataProvider+` Happy Path `)
        .click(`[name=projectName]`, `CSS`, `Click datapack project`)
        .changeInput(`[name=projectName]`, `CSS`, dataProvider+` Happy Path `, `Change input to... `+dataProvider+` Happy Path `)
        .click(``+dataProvider+``, `NAME`, `Click element`)
        .pause(5000)
        .click(`[id=Next]`, `CSS`, `Click move to next step`)
        .pause(1000)
        .click(`[id=Next]`, `CSS`, `Click move to next step`)
        .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `SUBMITTED`, `El text is... "SUBMITTED"`)
        .pause(60000)
        .pause(60000)
        .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,240000)
        .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `COMPLETED`, `El text is... "COMPLETED"`)
        switch(otherOptions){
            case "Run Export Again":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-rerunExport > button`,`CSS`,`Click Rerun Export`)
                    .click(`.qa-DataPackOptions-RaisedButton-rerun > button`,`CSS`,`Confirm Rerun`)
                break;
            case "Clone":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-cloneExport > button`,`CSS`,`Click Clone`)
                    .click(`.qa-DataPackOptions-RaisedButton-clone > button`,`CSS`,`Confirm Clone`);
                break;
            case "Delete":
                client
                    .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
                    .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`);
                break;
            default:
                break;
        }
    return client;
};