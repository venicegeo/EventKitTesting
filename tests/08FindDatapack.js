 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Find Datapack'],
    'Find Datapack': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser, client.globals.GeoAxisPass)
         .menuNavigation(client,"Create DataPack")
         .createDatapack(client,'Delaplaine','1','DigitalGlobe Imagery (Foundation GEOINT)','Keep')
         .menuNavigation(client,"DataPack Library")
         .searchForDatapack(client,'DigitalGlobe Imagery (Foundation GEOINT) Happy Path ')
         .click(`.qa-DataPackListItem-titleLink > a`,`CSS`,`Click Datapack`)
         .click(`.qa-DataPackOptions-RaisedButton-deleteExport > button`,`CSS`,`Click Delete`)
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton > button`,`CSS`,`Confirm Delete`)
         .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
         .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path `)
         .keys("\uE006")
         .assert.elementNotPresent(`.qa-DataPackListItem-titleLink > a`,`Datapack is gone after deleted`)
         .end();
}
 };