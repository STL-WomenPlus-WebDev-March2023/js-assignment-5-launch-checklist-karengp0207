// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageURL) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageURL}" alt="Planet ${name} Image">
        `;
                };

function validateInput(testInput) {
   if (testInput === "") {
        return "Empty";
   };
   if (isNaN(testInput) === true) {
        return "Not a Number";
    };
    if (isNaN(testInput) === false) {
        return "Is a Number";
    };
};

function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {
    if (validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
        alert("Invalid entries.  Please try again.");
    } else {
        document.getElementById('pilotStatus').innerHTML = `Pilot: ${pilotName.value} is ready`;
        document.getElementById('copilotStatus').innerHTML = `CoPilot: ${copilotName.value} is ready`;
            if (fuelLevel.value < 10000) {
                document.getElementById('fuelStatus').innerHTML = 'Fuel level is TOO low for launch';
                document.getElementById('faultyItems').style.visibility = 'visible';
                document.getElementById('launchStatus').innerHTML = 'Shuttle NOT ready for launch';
                document.getElementById('launchStatus').style.color = 'red';
                } else {
                    document.getElementById('fuelStatus').innerHTML = "Enough fuel for launch";
                }        
                if (cargoMass.value > 10000) {
                document.getElementById('cargoStatus').innerHTML = 'Cargo mass is TOO high for launch';
                document.getElementById('faultyItems').style.visibility = 'visible';
                document.getElementById('launchStatus').innerHTML = 'Shuttle NOT ready for launch';
                document.getElementById('launchStatus').style.color = '#C7254E'; //red
                } else {
                    document.getElementById('cargoStatus').innerHTML = 'Cargo mass is low enough for launch';
                }
                if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
                    document.getElementById('launchStatus').innerHTML = 'Shuttle IS ready for launch';
                    document.getElementById('launchStatus').style.color = '#419F6A'; //green
                    document.getElementById('faultyItems').style.visibility = 'visible';
                }    
            };
    };

   


async function myFetch() {
    //need to add the URL and return response.json()
    
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
});

    return planetsReturned;
}

function pickPlanet(planets) {   //an array of planet objects
    randomPick = Math.floor(Math.random() * planets.length);    //Math.random - between 0 and 1 
    return planets[randomPick];                                  //Math.floor - rounds DOWN to nearest integer

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;



