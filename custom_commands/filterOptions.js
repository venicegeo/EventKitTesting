exports.command = function(client,filterOption){
    require('./../common/snaptest-nw-driver.js').bindHelpers(client);
    require('./../common/components.js').bindComponents(client);


    switch(filterOption){
        case "Private":
            client.click(`.qa-PermissionsFilter-RadioButton-private > input`,`CSS`,`Click private filter option`);
            break;
        case "Shared":
            client.click(`.qa-PermissionsFilter-RadioButton-group > input`,`CSS`,`Click group filter option`);
            break;
        case "Complete":
            client.click(`.qa-StatusFilter-Checkbox-complete > input`,`CSS`,`Click complete filter option`);
            break;
        case "Running":
            client.click(`.qa-StatusFilter-Checkbox-running > input`,`CSS`,`Click running filter option`);
            break;
        case "Error":
            client.click(`.qa-StatusFilter-Checkbox-error > input`,`CSS`,`Click error filter option`);
            break;
        default:
            if(filterOption.includes("Source")) {
                var source = filterOption.substr(filterOption.indexOf("=") + 1, filterOption.length());
                switch (source) {
                    case "DigitalGlobe Imagery (Foundation GEOINT)":
                        client.click(`.qa-ProvidersFilter-Checkbox:nth-of-type(2) > input`, `CSS`, `Click DGI filter`);
                        break;
                    case "NOME":
                        client.click(`.qa-ProvidersFilter-Checkbox:nth-of-type(3) > input`, `CSS`, `Click NOME filter`);
                        break;
                    case "OpenStreetMap Data (Themes)":
                        client.click(`.qa-ProvidersFilter-Checkbox:nth-of-type(4) > input`, `CSS`, `Click OSM Themes filter`);
                        break;
                    case "OpenStreetMap Tiles":
                        client.click(`.qa-ProvidersFilter-Checkbox:nth-of-type(5) > input`, `CSS`, `Click OSM Tiles filter`);
                        break;
                    case "Aster Elevation (V2)":
                        client.click(`.qa-ProvidersFilter-Checkbox:nth-of-type(1) > input`, `CSS`, `Click DGI filter`);
                        break;
                }
            }
            break;
    }
    client.click(`.qa-FilterHeader-RaisedButton-apply`,`CSS`,`Click apply`);
    client.çç
    return client;
};