const APIkey = 'be30a9680212de12f4b402aa5368de26';

let apiCall = function(city){

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric&lang=fr`;
fetch (url).then ((response) => 
	response.json().then((data) => {
        //console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    
    })
).catch (err => console.log ('Erreur : ' + err));

}


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    console.log(ville);
    apiCall(ville);
}
);

apiCall('toulouse');