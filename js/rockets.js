const api = "https://api.spacexdata.com/v3/rockets";

const callApi = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        rockets(data);

    } catch (error) {
        console.log(error);
    }
};

callApi();

const graphicArray = [{
        url: "../assets/img/0.png",
        alt: "Illustration of Falcon 9"
    },
    {
        url: "../assets/img/1.png",
        alt: "Illustration of Falcon Heavy"
    },
    {
        url: "../assets/img/2.png",
        alt: "Illustration of Starship"
    }
];




function rockets(data) {
    data.shift(); // this removes the first Rocket (which is an old model not needed for this site)

    // I can't seem to find an easy way to add the graphicArray key and values to data, but this works.
    // Also this doesn't work if the API updates with i.e. a new rocket (or removes one)
    let data0 = data[0];
    let data1 = data[1];
    let data2 = data[2];
    data0.imgUrl = "assets/img/0.png";
    data1.imgUrl = "assets/img/1.png";
    data2.imgUrl = "assets/img/2.png";

    const rocketContainer = document.querySelector(".rocket-container");

    data.forEach(data => {

        rocketContainer.innerHTML += `<section class="rocket">
                                        <div class="page-container_rockets">
                                        <h2 class="sub-heading">${data.rocket_name}</h2>
                                        <p class="paragraph">${data.description}</p>
                                        <div class="overview-img">
                                        <img src="${data.imgUrl}" alt="" class="rocket-img">
                                        
                                            <div class="overview">
                                            <h3 class="sub-h3">Overview</h3>
                                            <table>
                                                <tr class="row">
                                                    <td class="overview-left">Height</td>
                                                    <td class="overview-right"><span class="bold">${data.height.meters}</span> m</td>
                                                </tr>
                                                <tr class="row">
                                                    <td class="overview-left" >Diameter</td>
                                                    <td class="overview-right"><span class="bold">${data.diameter.meters}</span> m</td>
                                                </tr>
                                                <tr class="row">
                                                    <td class="overview-left" >Mass</td>
                                                    <td class="overview-right"><span class="bold">${data.mass.kg}</span> kg</td>
                                                </tr>
                                                <tr class="row">
                                                    <td class="overview-left" >Payload to LEO</td>
                                                    <td class="overview-right"><span class="bold">${data.payload_weights[0].kg}</span> kg</td>
                                                </tr>
                                                <tr class="row">
                                                    <td class="overview-left" >Payload to GEO</td>
                                                    <td class="overview-right"><span class="bold">${data.payload_weights[0].kg}</span> kg</td>
                                                </tr>
                                            </table>
                                            </div>
                                        </div>
                                        </div>
                                      </section>`

    });
}