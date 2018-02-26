 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['FindDataPack'],
    'FindDataPack': function(client) {

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
       .click(`.qa-Application-Link-create`, `CSS`, `Click element`)
       .click(`.bootstrap-typeahead-input-main`, `CSS`, `Click element`)
       .changeInput(`.bootstrap-typeahead-input-main`, `CSS`, `brasilia`, `Change input to... "brasilia"`)
       .click(`.bootstrap-typeahead-menu > :nth-child(2) .qa-TypeaheadMenuItem-description`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`[name=exportName]`, `CSS`, `Click element`)
       .changeInput(`[name=exportName]`, `CSS`, `Selen`, `Change input to... "Selen"`)
       .changeInput(`[name=exportName]`, `CSS`, `Selenium T`, `Change input to... "Selenium T"`)
       .changeInput(`[name=exportName]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`div:nth-of-type(2) > div:nth-of-type(2) > div > div > form > div > div:nth-of-type(3)`, `CSS`, `Click element`)
       .click(`[name=datapackDescription]`, `CSS`, `Click element`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Sele`, `Change input to... "Sele"`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Seleni`, `Change input to... "Seleni"`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Selenium`, `Change input to... "Selenium"`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Selenium `, `Change input to... "Selenium "`)
       .changeInput(`[name=datapackDescription]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=projectName]`, `CSS`, `Click element`)
       .changeInput(`[name=projectName]`, `CSS`, `Selen`, `Change input to... "Selen"`)
       .changeInput(`[name=projectName]`, `CSS`, `Selenium`, `Change input to... "Selenium"`)
       .changeInput(`[name=projectName]`, `CSS`, `Selenium `, `Change input to... "Selenium "`)
       .changeInput(`[name=projectName]`, `CSS`, `Selenium Test`, `Change input to... "Selenium Test"`)
       .click(`[name=makePublic]`, `CSS`, `Click element`)
       .click(`div > form > div > div:nth-of-type(8) > div > div > label > div > input`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(2) > div > button > div > div > svg`, `CSS`, `Click element`)
       .click(`.qa-Application-Link-exports`, `CSS`, `Click element`)
       .elTextIs(`div > div > div:nth-of-type(2) > div > div > div > span > div > div > div > a`, `CSS`, `Selenium Test`, `El text is... "Selenium Test"`)
       .click(`div > div > div:nth-of-type(2) > div > div > div > span > div > div > div > a`, `CSS`, `Click element`)
       .click(`form > div > div:nth-of-type(2) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(3) > button > div > span`, `CSS`, `Click element`)
       .click(`div > div:nth-of-type(3) > div:nth-of-type(2) > button > div`, `CSS`, `Click element`)
       .click(`div:nth-of-type(33)`, `CSS`, `Click element`)
       .end();
},
       afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };