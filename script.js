// Write your JavaScript code here!

//const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    //from Chapter 25.9 on validation
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let document = window.document;
        //let list = document.getElementById('faultyItems');
        let inputPilotName = document.querySelector("input[name=pilotName]");
        let inputCopilotName = document.querySelector("input[name=copilotName]");
        let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
        let inputCargoMass = document.querySelector("input[name=cargoMass]");
        
        if(inputPilotName.value === "" || inputCopilotName.value === "" || inputFuelLevel.value === "" || inputCargoMass.value === "") {
            alert("All fields are required");
            event.preventDefault();
        } else {
            formSubmission(document, inputPilotName, inputCopilotName, inputFuelLevel, inputCargoMass)
            event.preventDefault();
        };
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageURL = planet.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageURL);
    });
});