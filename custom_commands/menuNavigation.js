exports.command = function(client,menuOption){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);

    switch(client,menuOption){
        case "Dashboard":
            client
                .click('qa-Application-Link-dashboard','CSS','Click element')
                .assert.urlContans("dashboard","expected dashboard in url");
        case "DataPack Library":
            client
                .click('.qa-Application-Link-exports', 'CSS', 'Click element')
                .assert.urlContains("exports","expected export in url");
            break;
        case "Create DataPack":
            client
                .click('.qa-Application-Link-create', 'CSS','Click element')
                .assert.urlContains("create","expected create in url");
            break;
        case "Members and Groups":
            client
                .click('.qa-Application-Link-groups', 'CSS', 'Click element')
                .assert.urlContains("groups","expected groups in url");
            break;
        case "About EventKit":
            client
                .click('.qa-Application-Link-about', 'CSS', 'Click element')
                .assert.urlContains("about","expected about in url");
            break;
        case "Account Settings":
            client
                .click('.qa-Application-Link-account', 'CSS', 'Click element')
                .assert.urlContains("account","expected account in url");
            break;
        case "Logout":
            client
                .click('.qa-Application-Link-logout', 'CSS', 'Click element')
                .click('.qa-ConfirmDialog-RaisedButton-ConfirmButton','Click element');
            break;     
    }
    return client;
};