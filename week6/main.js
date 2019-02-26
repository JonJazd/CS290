function run(){
    console.log("running");
    var req = new XMLHttpRequest();
    var getString = "http://api.openweathermap.org/data/2.5/weather?"
    var cityName = document.getElementById("city name").value;
    var zipCode = document.getElementById("zip").value;
    console.log(cityName);
    console.log(zipCode);
    if (zipCode===""){
        getString += "q=";
        getString += cityName;
    } else {
        getString += "zip=";
        getString += zipCode;
        getString += ",us";
    }
    req.open("GET", getString,false);
    // tells me key is invalid, should work with a valid key.
    req.send(null);
    console.log(JSON.parse(req.responseText));
    var recData = req.responseText;
    req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(recData);
    console.log(JSON.parse(req.responseText));
}