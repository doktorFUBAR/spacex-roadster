const api = "https://api.spacexdata.com/v3/info";

const callApi = async () => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        info(data);

    } catch (error) {
        console.log(error);
    }
};

callApi();





function info(data) {
    const aboutContainer = document.querySelector(".about-container");
    aboutContainer.innerHTML = `<p class="paragraph">${data.summary}</p>`


}