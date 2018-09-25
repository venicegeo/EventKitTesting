 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Filters'],
    'Filters': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
       .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser, client.globals.GeoAxisPass)
         .pause(6000)
         .filterOptions(client,`Private`)
         .assert.elementPresent(`.qa-DataPackListItem-Lock`,`CSS`,`Lock is present`)
         .assert.elementNotPresent(`.qa-DataPackListItem-SocialGroup`,`CSS`,`Shared is not present`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Shared`)
         .assert.elementNotPresent(`.qa-DataPackListItem-Lock`,`CSS`,`Lock is not present`)
         .assert.elementPresent(`.qa-DataPackListItem-SocialGroup`,`CSS`,`Shared is present`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Complete`)
         .assert.elementPresent(`.qa-DataPackListItem-NavigationCheck`,`CSS`,`Completed is present`)
         .assert.elementNotPresent(`.qa-DataPackListItem-NotificationSync`,`CSS`,`Running is not present`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Running`)
         .assert.elementNotPresent(`.qa-DataPackListItem-NavigationCheck`,`CSS`,`Completed is not present`)
         .assert.elementPresent(`.qa-DataPackListItem-NotificationSync`,`CSS`,`Running is present`)
         .assert.elementNotPresent(`.qa-DataPackListItem-SocialGroup`,`CSS`,`Error is not present`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Error`)
         .assert.elementNotPresent(`.qa-DataPackListItem-NavigationCheck`,`CSS`,`Completed is not present`)
         .assert.elementPresent(`.qa-DataPackListItem-NotificationSync`,`CSS`,`Running is not present`)
         .assert.elementNotPresent(`.qa-DataPackListItem-SocialGroup`,`CSS`,`Error is present`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Source=DigitalGlobe Imagery (Foundation GEOINT)`)
         .elTextIs(`.qa-DataPackListItem-subtitle-event`,`CSS`,`Event: DGI`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Source=NOME`)
         .elTextIs(`.qa-DataPackListItem-subtitle-event`,`CSS`,`Event: NOME`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Source=OpenStreetMap Data (Themes)`)
         .elTextIs(`.qa-DataPackListItem-subtitle-event`,`CSS`,`Event: OSM THEME`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .click(`.qa-FilterHeader-FlatButton-clear`,`CSS`,`Clear filter`)
         .click(`.qa-DataPackFilterButton-FlatButton`,`CSS`,`Show filters`)
         .filterOptions(client,`Source=OpenStreetMap Tiles`)
         .elTextIs(`.qa-DataPackListItem-subtitle-event`,`CSS`,`Event: OSM TILE`)
       .end();
}
 };