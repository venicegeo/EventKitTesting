 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

 var https = require('https');
 module.exports = {
   '@tags': ['Create Two Jobs Delete One.js'],
    'Create Two Jobs Delete One.js': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;

     var dataProvider = 'DigitalGlobe Imagery (Foundation GEOINT)'
     client
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
         .menuNavigation(client,"Create DataPack")
         .createDatapack(client,'Delaplaine','1','DigitalGlobe Imagery (Foundation GEOINT)','Clone')
         .click(`[id=Next]`, `CSS`, `Click move to next step`)
         .pause(1000)
         .pause(1000)
         .click(`[id=Next]`, `CSS`, `Click move next step`)
         .click(`[id=Next]`,`CSS`,`Click submit datapack`)
         .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `SUBMITTED`, `El text is... "SUBMITTED"`)
         .pause(60000)
         .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,240000)
         .elTextIs(`div > form > div > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(2)`, `CSS`, `COMPLETED`, `El text is... "COMPLETED"`)
         .menuNavigation(client,"DataPack Library")
         .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
         .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path `)
         .keys("\uE006")
         .assert.elementPresent('Text','DigitalGlobe Imagery (Foundation GEOINT) Happy Path ','Datapack Exists')
         .click(`Text`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path `,`Click Datapack`)
         .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`)
         .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
         .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path `)
         .keys("\uE006")
         .click('Text','DigitalGlobe Imagery (Foundation GEOINT) Happy Path ',`Click Datapack`)
         .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`)
     .end();

       }
 };