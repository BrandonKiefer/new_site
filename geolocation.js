$(document).ready(function () {

    $.get('/api/geolocation', function (response) {
        let state = response.state_prov;
        let city = response.city;
        let timezone = response.timezone;
        let time = response.current_time;


        let locationMessage = document.getElementById('location-message');
        locationMessage.textContent = `Greetings user, it appears you are visiting from the ${city}, ${state} area.`;
    });
});