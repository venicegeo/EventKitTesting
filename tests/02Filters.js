 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Filters'],
    'Filters': function(client) {

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || `https://eventkit.geointservices.io`;


     client
       .url(`https://eventkit.geointservices.io/login?redirect=%2Fexports`, 500, 500, `Load page... "https://eventkit.geointservices.io/login?redirect=%2Fexports"`)
       .maximizeWindow()
       .click(`div > div > div > div > div:nth-of-type(2) > button > div > div > span`, `CSS`, `Click element`)
       .pathIs(`/oam/west/servlet/login.jsp`, `Path is... "/oam/west/servlet/login.jsp"`)
       .click(`div > ul > li:nth-of-type(4) > a`, `CSS`, `Click element`)
       .click(`[name=password]`, `CSS`, `Click element`)
       .changeInput(`[name=password]`, `CSS`, client.globals.GeoAxisPass, `Change input to... "client.globals.GeoAxisPass"`)
       .click(`[name=username]`, `CSS`, `Click element`)
       .changeInput(`[name=username]`, `CSS`, 'PzTestPass16', `Change input to... "client.globals.GeoAxisUser"`)
       .click(`[name=submit]`, `CSS`, `Click element`)
       .click(`div > div > div > div:nth-of-type(2) > div > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .elTextIs(`.qa-LoadButtons-range`, `CSS`, `0 of 0`, `El text is... "0 of 0"`)
       .click(`div > div > div > div:nth-of-type(2) > div > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div > button > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(4) > div > div > input`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div > div:nth-of-type(3) > div > div > div:nth-of-type(2) > button:nth-of-type(2) > div`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(4) > div:nth-of-type(2) > div > input`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div > div:nth-of-type(3) > div > div > div:nth-of-type(2) > button:nth-of-type(3) > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(3) > div > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div > button > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div > span`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(2) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div:nth-of-type(5) > div:nth-of-type(3) > input`, `CSS`, `Click element`)
       .click(`div > div > div > div > div > button > div > div`, `CSS`, `Click element`)
       .click(`div:nth-of-type(4) > div > div > div > div > div > button > span`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };