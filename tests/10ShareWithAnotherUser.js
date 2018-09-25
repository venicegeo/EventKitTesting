const TIMEOUT = 10000;
const random = "" + parseInt(Math.random() * 1000000);
const random1 = "" + parseInt(Math.random() * 1000000);
const random2 = "" + parseInt(Math.random() * 1000000);
const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
module.exports = {
    '@tags': ['Share With Another User'],
    'Share With Another User': function(client) {

        require('../common/snaptest-nw-driver.js').bindHelpers(client);
        require('../common/components.js').bindComponents(client);

        var baseUrl = client.launchUrl || client.globals.EventKitBase;


        client
            .url(client.globals.EventKitBase)
            .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
            .menuNavigation(client,"Create DataPack")
            .createDatapack(client,'Delaplaine','1','DigitalGlobe Imagery (Foundation GEOINT)','Keep')
            .toggleSharingDatapack(client,'DigitalGlobe Imagery (Foundation GEOINT) Happy Path ','Member','pzuser02')
            .menuNavigation('Logout')
            .loginStep(client,client.globals.GeoAxisUser2,client.globals.GeoAxisPass)
            .searchForDatapack(client,'DigitalGlobe Imagery (Foundation GEOINT) Happy Path ')
            .menuNavigation('Logout')
            .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
            .toggleSharingDatapack(client,'DigitalGlobe Imagery (Foundation GEOINT) Happy Path ','Member','pzuser02')
            .menuNavigation('Logout')
            .loginStep(client,client.globals.GeoAxisUser2,client.globals.GeoAxisPass)
            .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
            .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`DigitalGlobe Imagery (Foundation GEOINT) Happy Path `)
            .keys("\uE006")
            .assert.elementNotPresent(`.qa-DataPackListItem-titleLink > a`,`Datapack is gone after share is revoked`)
            .end();
    }
};