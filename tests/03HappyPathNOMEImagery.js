 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

 var https = require('https');
 module.exports = {
   '@tags': ['HappyPath NOME Imagery'],
    'HappyPath NOME Imagery': function(client) {

     require('../common/snaptest-nw-driver.js').bindHelpers(client);
     require('../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || client.globals.EventKitBase;


     client
         .url(client.globals.EventKitBase)
         .loginStep(client,client.globals.GeoAxisUser, client.globals.GeoAxisPass)
         .menuNavigation(client,"Create DataPack")
         .createDatapack(client,'Delaplaine','1','NOME','Delete')
       .end();
}
 };