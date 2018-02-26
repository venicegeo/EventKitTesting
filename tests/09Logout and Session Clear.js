 const TIMEOUT = 10000;
 const random = "" + parseInt(Math.random() * 1000000);
 const random1 = "" + parseInt(Math.random() * 1000000);
 const random2 = "" + parseInt(Math.random() * 1000000);
 const random3 = "" + parseInt(Math.random() * 1000000);

var https = require('https');
 module.exports = {
   '@tags': ['Logout and Session Clear'],
    'Logout and Session Clear': function(client) {

     require('./../common/snaptest-nw-driver.js').bindHelpers(client);
     require('./../common/components.js').bindComponents(client);

     var baseUrl = client.launchUrl || `https://eventkit.dev.geointservices.io`;


     client
      .url(`https://eventkit.geointservices.io/login?redirect=%2Fexports`, 1440, 707, `Load page... "https://eventkit.geointservices.io/login?redirect=%2Fexports"`)
      .click(`div .qa-Application-content span`, `CSS`, `Click element`)
      .pathIs(`/oam/west/servlet/login.jsp`, `Path is... "/oam/west/servlet/login.jsp"`)
      .click(`div > ul > li:nth-of-type(4) > a`, `CSS`, `Click element`)
      .changeInput(`[name=username]`, `CSS`, `PzTestPass13`, `Change input to... "PzTestPass13"`)
      .click(`[name=password]`, `CSS`, `Click element`)
      .changeInput(`[name=password]`, `CSS`, `P1azzauserpassword*`, `Change input to... "P1azzauserpassword*"`)
      .click(`[name=submit]`, `CSS`, `Click element`)
      .pathIs(`/exports`, `Path is... "/exports"`)
      .elementPresent(`header > div > div`, `CSS`, `El is present`)
      .elementPresent(`div .qa-Application-header img`, `CSS`, `El is present`)
      .click(`.qa-Application-Link-logout`, `CSS`, `Click element`)
      .pathIs(`/oam/server/logout`, `Path is... "/oam/server/logout"`)
      .pathIs(`/login`, `Path is... "/login"`)
      .elTextIs(`.qa-LoginPage-container > :nth-child(1) strong`, `CSS`, `Welcome to EventKit`, `El text is... "Welcome to EventKit"`)
      .elTextIs(`div .qa-Application-content span`, `CSS`, `Login with GEOAxIS`, `El text is... "Login with GEOAxIS"`)
      .click(`div .qa-Application-content span`, `CSS`, `Click element`)
      .pathIs(`/oam/west/servlet/login.jsp`, `Path is... "/oam/west/servlet/login.jsp"`)
      .elTextIs(`h1`, `CSS`, `GEOAxIS Authentication`, `El text is... "GEOAxIS Authentication"`)
      .url(`https://eventkit.geointservices.io/exports`, 1440, 707, `Load page... "https://eventkit.geointservices.io/exports"`)
      .elTextIs(`.qa-LoginPage-container > :nth-child(1) strong`, `CSS`, `Welcome to EventKit`, `El text is... "Welcome to EventKit"`)
      .elTextIs(`div .qa-Application-content span`, `CSS`, `Login with GEOAxIS`, `El text is... "Login with GEOAxIS"`)
      .end();
},
       afterEach: function(client, done) {
        

        setTimeout(function() {
            done();
        }, 1000);

    }
 };