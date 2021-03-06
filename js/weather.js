"ues strict";

var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    lat: -18.717513,
    lon: 34.6911,
    units: "imperial",
    cnt: 4

})

request.fail(function (current, status, error) {
    console.log(status);
    console.log(error);
});

console.log(request);
request.done(function (response) {
    main(response);
    console.log(response);
})

function mainContent(response)  {
    response.list.forEach(function (data, i) {
        console.log(data);
        switch (i) {
            case 0 :
                $("#cityName")
        }
    })

}

function main(response) {
    response.list.forEach(function (data, i) {
        switch (i) {
            case 0 :
                $("#cityname").text(response.city.name);
                $(".card-group").html("<strong class='card-body text-center' id='box0'><h2>Today</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure + "</p></div>"
                );
                break;
            case 1 :
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box1'><h2>Tomorrow</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure + "<br>"
                );
                break;
            case 2 :
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box2'><h2>2-day forecast</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure
                );
                break;
            case 3:
                $("#cityname").text(response.city.name);
                $(".card-group").append("<div class='card-body text-center' id='box3'><h2>3-day forecast</h2><br><h4>" +
                    data.temp.min + "\xB0" + " / " +
                    data.temp.max + "\xB0" + "</h4><br><p class='m-0'><strong>" +
                    data.weather[0].main + ": </strong>" +
                    data.weather[0].description + "</p>" + "<p class='m-0'><strong>Humidity: </strong>" +
                    data.humidity + "</p><p class='m-0'><strong>Speed: </strong>" +
                    data.speed + "</p><p class='m-0'><strong>Pressure: </strong>" +
                    data.pressure
                );
                break;


        }

    });

    var address = {

        "location": {
            "lat": -18.717513,
            "lng": 34.6911
        }
    };

    var mapOptions = {

        zoom: 5,
        center: address,
        centermapType: google.maps.MapTpeId.ROADMAP


};



var map = new google.maps.Geocoder();
function callback(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            animation: google.maps.Animation.DROP,
            draggable: true
        });
        google.maps.event.addListener(marker, 'dragend', function () {
            var c0 = $('#box0');
            var c1 = $('#box1');
            var c2 = $('#box2');
            var c3 = $('#box3');
            c0.empty();
            c1.empty();
            c2.empty();
            c3.empty();
            var latitude = marker.getPosition().lat();
            var longitude = marker.getPosition().lng();
            request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
                APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
                lat: latitude,
                lon: longitude,
                units: "imperial",
                cnt: 4
            });
            request.done(function (response) {
                console.log(response);
                main(response);


// ///--------=====================    notes
//
//
//
//
// //-------=========     ACTION
// // $('h2').click(function () {
// //     $(this).slideToggle();
// // });
//
// //
// // setTimeout(function() {
// //     $('p').fadeOut()
// // },3500);
// $('input').hide();
// //
// $('#popUp').click(function() {
//     location.reload();
// });
//
// ///-----------          WEATHER
//
//
// // request.done(function(response) {
// //     console.log(response);
// //     console.log(response.main.humidity);
// //     console.log(response.main.temp_max);
// //     console.log(response.main.temp_min);
// // });
//
// // $.get('http://api.openweathermmap.org/data/2.5/forcast/daily', {
// //     APPID: 'ec23a89cbff5de43dd00cba3c31fef3e',
// //     lat:    29.423017,
// //     lon:    -98.48527,
// //     units:  'imperial'
// // }).done(function (response) {
// //     // $('#first').append('<div id="first">' + '</div>');
// //     console.log(response);
// //     console.log(response.list[0].temp_max);
// //     console.log(response.list[0].temp_min);
// // });
// //
// //
// //--------=================    .EACH()
//
//
// var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
//     APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
//     lat: 29.423017,
//     lon: -98.49,
//     cnt: 3,
//     units:  'imperial'
//
// });
//
// request.done(function(response) {
//     console.log(response);
//     response.list.forEach(function(data) {
//         console.log(data);
//         var imagUrl =  "http://api.openweathermap.org/data/2.5/forecast/daily" + icon + '.png';
//
//         $("#location").append("<div class='card-body col-3-lg'>" +
//             + "<h2>" + data.temp.max + "&degC" + data.temp.min + "&degC" + "</h2>"
//             + "<p>" + data.weather[0].main + "</p>"
//             + "<p> The " + data.weather[0].description + "</p>"
//             + "<p>" + data.humidity + "</p>" + $('.target').append("<img src='" + imageUrl + "'>")
//
//             // + "<p>" + data.imageURL + "</p>"
//             + "<p>The pressure is " + data.pressure + "</p></div></div>")
    });
});
// request.fail(onerror);
//
// //
// // <div class="row border">
// //     <div class="col">
// //     <h2>Day 1</h2>
// // <div id="first"></div>
// //     <p>weather</p>
// //     </div>
//
//
//
//
