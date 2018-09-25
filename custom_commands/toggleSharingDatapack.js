exports.command = function(client,datapackName,groupOrMember,sharieName){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);

    client
        .click(`.qa-DataPackSearchBar-TextField > input`,`CSS`,`Click Search Bar`)
        .changeInput(`.qa-DataPackSearchBar-TextField > input`,`CSS`,datapackName)
        .keys("\uE006")
        .click(`.qa-DataPackListItem-NavigationMoreVert`,`CSS`,`Click for more options`)
        .click(`.qa-DataPackListItem-MenuItem-share`,`CSS`,`Click share`);
    if(groupOrMember=="Member"){
        client.click(`.qa-DataPackShareDialog-RaisedButton-members`,`CSS`,`Click members tab`);
    }else{
        client.click(`.qa-DataPackShareDialog-RaisedButton-groups`,`CSS`,`Click members tab`);
    }
    client
        .click(`.qa-DataPackShareDialog-RaisedButton-members`,`CSS`,`Click members tab`)
        .click(`.qa-MembersBody-search > input`,`CSS`,`Click search`)
        .changeInput(`.qa-MembersBody-search > input`,`CSS`,sharieName)
        .click(`.qa-MemberRow-CardHeader > div > span > div > svg`,`CSS`,`Click on user2 to share with`)
        .click(`.qa-ShareBaseDialog-save`,`CSS`,`Click on save`)

    return client;
};