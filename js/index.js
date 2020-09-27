// API call for Roadster
const api = "https://api.spacexdata.com/v3/roadster";

const callApi = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        roadster(data);

    } catch (error) {
        console.log(error);
    }
};

callApi();


//ensures that the API refreshes so the user has the newest data
setInterval(callApi, 3000);

// Function to print the relevant data in HTML
function roadster(data) {
    // distance from Earth
    const distance = document.querySelector(".distance");
    const km = data.earth_distance_km;
    const cleanKM = Math.trunc(km);
    distance.innerText = `${cleanKM}`;

    // distance from Mars
    const marsDistance = document.querySelector(".distance-mars");
    const marsKm = data.mars_distance_km;
    const marsCleanKM = Math.trunc(marsKm);
    marsDistance.innerText = `${marsCleanKM}`;

    // Roadster velocity
    const velocity = document.querySelector(".velocity");
    const cleanVelocity = Math.trunc(data.speed_kph);
    velocity.innerText = `${cleanVelocity}`
}