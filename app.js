$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        console.log(api);
        let lastUpdated = citibike.data.stations[10].station_id;
            // let bike = citibike;
            // let stations = citibike;
                
            $("#last-updated").html(lastUpdated);
            // $("#bikes").html(bikes);
            // $("#stations").html(stations);
    })    

});