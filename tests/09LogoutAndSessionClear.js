 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Logout and Session Clear'],
    'Logout and Session Clear': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
         .menuNavigation(client,"Logout")
         .click(`.qa-ConfirmDialog-RaisedButton-ConfirmButton`,`CSS`,`Confirm Logout`)
         .back()
         .assert.urlContains("login","expected account in url")
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser,client.globals.GeoAxisPass)
      .end();
}
 };