exports.command = function(client,datapackName){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);

    client
        .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
        .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,datapackName)
        .keys("\uE006")
        .elTextIs('.qa-DataPackListItem-titleLink > a',`CSS`,datapackName,`DataPack is visable`)
    return client;
};