// Create Obj which making an API Call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v3.1/all", true);

// Send the Request to the Server 
request.send(null);

// Parse the Text Passed on from the server
request.onload = function () {
    var response = JSON.parse(request.responseText);
    //console.log(response);

    // For Loop
    for (var i = 0; i < 10; i++) {
        console.log(`${response[i].name.official} : ${response[i].capital}`);
    }

    // forEach
    response.forEach((country) => {
        console.log(`${country.name.official} : ${country.capital}`);
    })

    // For of
    for (const x of response) {
        console.log(`${x.name.official} : ${x.capital}`);
    }

}

request.onerror = function () {
    console.log("We have some error")
}

// For in 
const basicDetails = {
    name: "Shivendra",
    role: "Developer",
    DOB: "YY-MM-DD",
}

for (const key in basicDetails) {
    console.log(key, basicDetails[key])
}
