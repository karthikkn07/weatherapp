let userInp = document.getElementById('field').value;
//let userInput = userInp.toLowerCase();

function myCity() {
    let userInp = document.getElementById('field').value;
    document.getElementById('field').value = "";
    
    let key = 'da308e20633672b0e7bf07ecae258313';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInp}&appid=${key}`)
    .then(function(response){
        return response.json()
    }).then(function(data){
        weatherFore(data);
    })
    .catch(function(){
        console.log('There is a problem in the url')
        
    });
}

function weatherFore(d) {
    
    document.getElementById("details").style.display = "block";
       let celcius = Math.round((d.main.temp)-273.15);
    document.getElementById('city').innerHTML = d.name.toUpperCase();
    document.getElementById('temp').innerHTML = celcius + '&deg;' ;
    document.getElementById('desp').innerHTML = d.weather[0].description;
    document.getElementById('clouds').innerHTML = d.clouds.all;
    document.getElementById('coordinates').innerHTML =(`${d.coord.lon},${d.coord.lat}`) ;
}