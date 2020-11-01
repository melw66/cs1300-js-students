var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=lqQHRqBwYGTlgNO9_GrP0nFvGbiPJpYk3PcDScpKK3k";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
const showPlants = () => {
  corsPromise().then(
    (request) =>
      (request.onload = request.onerror = function () {
        // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
        getData(request.response);
      })
  );
}

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
const getData = (response) => {
  const plantData = JSON.parse(response).data;
  console.log(plantData);
  for (let i = 0; i < plantData.length; i++) {
    if (plantData[i].year == 1753) {
      const plantWrapper = document.createElement('div');
      plantWrapper.style = "width: 100%;";
      const plantName = document.createElement('h2');
      plantName.innerText = plantData[i].common_name;
      const plant_img = document.createElement('img');
      plant_img.setAttribute("src", plantData[i].image_url);
      plant_img.style = "width: 100%; border-radius: 30px;";
      plantWrapper.appendChild(plantName);
      plantWrapper.appendChild(plant_img);
      plantWrapper.add
      document.getElementById("wrapper").appendChild(plantWrapper);
    }
  } 
}