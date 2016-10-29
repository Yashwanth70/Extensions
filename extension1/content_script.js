function clickPlanet() {
    var planets = document.getElementsByClassName("gbut"),
        randomplanet = Math.floor(Math.random() * planets.length),
        clickplanet = planets[randomplanet];

    clickplanet.click();
    //setInterval(function () { ClickPlanet() }, 70*1000);
}

setInterval(function () { clickPlanet() }, 7*1000);
//clickPlanet();