const CLEFAPI = '2ad94a7a38d1c09957d79b4fa9155a64';
let resultatsAPI;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // console.log(position);

        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long, lat);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer, merci.`)
    })
}

function AppelAPI(long, lat) {

    // console.log(long, lat);

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            console.log(data);
        })
}