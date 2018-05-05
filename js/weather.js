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