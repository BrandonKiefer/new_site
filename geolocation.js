$(document).ready(function () {

    $.get('/api/geolocation', function (response) {
        let state = response.state_prov;
        let city = response.city;
        let timezone = response.timezone;
        let time = response.current_time;


        let locationMessage = document.getElementById('location-message');
        locationMessage.textContent = `Hi there, it appears you are visiting from somewhere near the ${city}, ${state} area.`;

        let str = `Hi there, it appears you are visiting from somewhere near the ${city}, ${state} area. `

   
         if (state == "Colorado"){
            locationMessage.textContent = str + "Fun Colorado fact: Colorado is nicknamed the 'Centennial State' because it became a state in the year 1876-- that's 100 years after the signing of the Declaration of Independence. Let's go Rockies because why not."
        }
         if (state == "Alabama"){
            locationMessage.textContent = str + "You're actually visiting from my home-state! I'm sorry you didn't make it out. Well at least you're not in Mississippi."
        }
         if (state == "Mississippi"){
            locationMessage.textContent = str + "Oof! You probably have your reasons. Hope your capital gets drinkable water soon."
        }
         if (state == "Florida"){
            locationMessage.textContent = str + "If you're the Florida Man or Woman I've been reading about-- I think there might be a warrant out for your arrest or something. As long as you're here, may as well have some fun playing Trails."
        }
         if (state == "Pennsylvania"){
            locationMessage.textContent = str + "Let's stop off at the WaWa and grab a hoagie on the way home."
        }
         if (state == "Delaware") {
            locationMessage.textContent = str + "Hi. I'm in Delaware."
        }
         if (state == "Louisiana"){
            locationMessage.textContent = str + "Home away from home! Save me some crawfish and gumbo plz!"
        }
         if (state == "Georgia"){
            locationMessage.textContent = str + "Let's go eat some peaches."
        }
         if (state == "Texas"){
            locationMessage.textContent = str + "Thanks for stopping by from the lone-star state!"
        }
         if (state == "Nebraska"){
            locationMessage.textContent = str + "Fun Nebraska fact: Nebraska is famous for its thriving music scene, vast prairies, spacious farmlands, and unique attractions. The state was once considered part of the Great American Desert but has since transformed into a leading agricultural state. Nebraska is also known for being the origin of the Reuben sandwich and Kool-Aid"
        }
         if (state == "Illinois"){
            locationMessage.textContent = str + "DA BEARS! DA BULLS!! DA CUBS!!! DA BLACKHAWKS!!! Sheesh! Y'all have a lot of sports teams in Illinois."
        }
        if (state == "California"){
            locationMessage.textContent = str + "Fun fact: Apparently in California, specifically in the Bay Area, food doesn't 'slap' but rather-- it 'smacks'."
        }
        if (state == "West Virgina"){
            locationMessage.textContent = str + "Take me home! Country roads!"
        }
        if (state == "Utah"){
            locationMessage.textContent = str + "Thanks for visiting from the Beehive State-- please don't sting me!"
        }
    });
});