//OpenWeatherMap
//Username: shengqiw
//Pass: the usual
//email: shengqiw97@gmail.com
//API Key: 65a90d279a687c3a061888696ad2bdf2
//alt key: f1e68e6365daf8be26eeda02220d90db

const apiKey = "65a90d279a687c3a061888696ad2bdf2";


function body_onload() {
    showDate();
    showWeather();
    showToDo();

}

function showDate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var dow = today.getDay();

    var daySuffix = "";

    //getting the suffix for dates
    if ((day.toString().split('').pop() == 1) && day != 11)
        daySuffix = "st";
    else if ((day.toString().split('').pop() == 2) && day != 12)
        daySuffix = "nd";
    else if ((day.toString().split('').pop() == 3) && day != 13)
        daySuffix = "rd";
    else
        daySuffix = "th";

    if (day < 10) {
        day = '0' + day;
    }
    today = monthNames[month] + ' ' + day + daySuffix + ', ' + year;

    document.getElementById("id_date").innerHTML = today;
    document.getElementById("id_dow").innerHTML = dayNames[dow];

}

function showWeather() {

    $(function(){
        var api = "http://api.openweathermap.org/data/2.5/weather?zip=01886,us&units=imperial&appid=";

        $.getJSON(api.concat(apiKey), function(data){

            var weather_desc = data.weather[0].description;
            //playing Zephryus TESTING
            //var weather_desc = "light rain";
            var weather_degrees = Math.round(data.main.temp);
            var img = document.createElement("img");
            var degrees;
            document.getElementById("id_description").style.visibility = "visible";
            //alert(data.weather[1].description);
            document.getElementById("id_description").innerHTML = weather_desc;
            if (weather_desc.length > 12) {
                //100% still shrinks???
                document.getElementById("id_description").style.fontSize = "100%";
                document.getElementById("id_degrees").setAttribute("style", "margin-top:-5%;");
            }

            if (weather_desc.includes("thunderstorm"))
                img.src = "../images/weather_icon1.png";
            else if (weather_desc.includes("clear"))
                img.src = "../images/weather_icon2.png";
            else if (weather_desc == "broken clouds" || weather_desc == "scattered clouds")
                img.src = "../images/weather_icon3.png";
            else if (weather_desc == "light rain")
                img.src = "../images/weather_icon4.png";
            else if (weather_desc.includes("cloud"))
                img.src = "../images/weather_icon5.png";


            img.id = "weather_icon";
            document.getElementById("div_weather").appendChild(img);

            degrees = document.getElementById("id_degrees");
            degrees.innerHTML = weather_degrees + " \xB0F";

        });
    });

}

function showToDo() {
    var shellToDO = document.getElementById("div_todo");
    //TODO get info from database and populate


}

function createToDo() {
    var inputStr = document.getElementById("in_todo").value;
    var elementContainer = document.getElementById("div_elements");

    var element = document.createElement("div");
    element.className = "todo_element";
    elementContainer.appendChild(element);

    var elementStr = document.createElement("div");
    elementStr.innerHTML = inputStr;

    var elementCheck = document.createElement("input");
    elementCheck.type = "checkbox";
    elementCheck.id = "in_"

}
