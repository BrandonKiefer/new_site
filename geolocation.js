$(document).ready(function () {

    $.get('https://brandonkiefer-backend.onrender.com/api/geolocation', function (response) {
        let state = response.state_prov;
        let city = response.city;
        let timezone = response.timezone;
        let time = response.current_time;


        let locationMessage = document.getElementById('location-message');
        locationMessage.textContent = `Hi there, it appears you are visiting from somewhere near the ${city}, ${state} area.`;

        let str = `Hi there, it appears you are visiting from somewhere near the ${city}, ${state} area. Fun ${state} fact: `

   
         if (state == "Colorado"){
            locationMessage.textContent = str + "Colorado is nicknamed the 'Centennial State' because it became a state in the year 1876-- that's 100 years after the signing of the Declaration of Independence. Let's go Rockies because why not."
        }
         if (state == "Alabama"){
            locationMessage.textContent = str + "You're actually visiting from my home-state! Did you know Alabama introduced the first 911 emergency telephone system in the United States, in the town of Haleyville in 1968."
        }
         if (state == "Mississippi"){
            locationMessage.textContent = str + "Mississippi consistently ranks at or near the bottom in educational performance among U.S. states. Okay, maybe that fact isn't so fun."
        }
         if (state == "Florida"){
            locationMessage.textContent = str + "If you're the Florida Man or Woman I've been reading about-- I think there might be a warrant out for your arrest. As long as you're here, may as well have some fun playing Trails."
        }
         if (state == "Pennsylvania"){
            locationMessage.textContent = str + "The Declaration of Independence and U.S. Constitution were both signed in Philadelphia, PA."
        }
         if (state == "Delaware") {
            locationMessage.textContent = str + "Hi. I'm in Delaware."
        }
         if (state == "Louisiana"){
            locationMessage.textContent = str + "This is where most of my family lives! Louisiana has parishes instead of counties and is the only state with this system due to its French and Spanish colonial history. Save me some crawfish and gumbo!"
        }
         if (state == "Georgia"){
            locationMessage.textContent = str + "Georgia is the world’s largest producer of pecans. Now let's go eat some peaches."
        }
         if (state == "Texas"){
            locationMessage.textContent = str + "Texas has its own power grid, separate from the rest of the U.S."
        }
         if (state == "Nebraska"){
            locationMessage.textContent = str + "Nebraska is famous for its thriving music scene, vast prairies, spacious farmlands, and unique attractions. The state was once considered part of the Great American Desert but has since transformed into a leading agricultural state. Nebraska is also known for being the origin of the Reuben sandwich and Kool-Aid."
        }
         if (state == "Illinois"){
            locationMessage.textContent = str + "Chicago is a leader in financial trading technology, hosting the largest futures and options exchange globally."
        }
        if (state == "California"){
            locationMessage.textContent = str + "California is the most populous state in the U.S., and if it were a country, its economy would rank among the largest in the world."
        }
        if (state == "West Virgina"){
            locationMessage.textContent = str + "The First Mother's Day was established by Anna Jarvis and was celebrated at St. Andrew's Methodist Church in Grafton, West Virginia, on May 10, 1908. Take me home! Country roads!"
        }
        if (state == "Utah"){
            locationMessage.textContent = str + "Utah’s tech corridor is home to many tech startups and established companies like Adobe and Qualtrics."
        }
    });
});