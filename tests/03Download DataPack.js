 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['DownloadDataPack'],
    'DownloadDataPack': function(client) {
     

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || `https://eventkit.dev.geointservices.io`;


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
       .click(`div > a > div > button > div > div`, `CSS`, `Click element`)
       .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
       .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `delaplane`, `Change input to... "delaplane"`)
       .click(`.bootstrap-typeahead-menu > :nth-child(3) .qa-TypeaheadMenuItem-name`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .changeInput(`[name=exportName]`, `CSS`, `Selenium Test`, `Change input to... "Selenium test"`)
       .click(`[name=datapackDescription]`, `CSS`, `Click element`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=projectName]`, `CSS`, `Click element`)
       .changeInput(`[name=projectName]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=makePublic]`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div > label > div > input`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg > path`, `CSS`, `Click element`)
       .click(`div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > button > div > div`, `CSS`, `Click element`)
       .pause(60000)
       .waitForElementPresent(`.qa-ProviderRow-Check-providerStatus`,240000)
       .click(`div:nth-of-type(4) > div > div:nth-of-type(2) > div > table > thead > tr > th > a > div > button > div > span`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };