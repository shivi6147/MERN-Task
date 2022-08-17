// 1. How to compare two JSON have the same properties without order?

var obj1 = { name: 'Person 1', age: 5 };
var obj2 = { age: 5, name: 'Person 1' };

function objComparison(obj1, obj2) {
    for (let key in obj1) {
        if (!key in obj2) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(objComparison(obj1, obj2));



// 2. Use the rest countries 'API URL -> and display all the country flags in the console.
// 3. Use the same rest countries and print all the countries names, region, sub-region and populations.

// Create Obj which making an API Call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v2/all", true);

// Send the Request to the Server 
request.send(null);

// Parse the Text Passed on from the server
request.onload = function () {
    var response = JSON.parse(request.responseText);
    //console.log(response);
    response.forEach((country) => {
        console.log("****** Details of Country ******");
        console.log(`Country Name: ${country.name.official}`);
        console.log(`Flag: ${country.flags.png}`);
        console.log(`Region: ${country.region}`);
        console.log(`Sub-Region: ${country.subregion}`);
        console.log(`Population: ${country.population}`);
    })
}

request.onerror = function () {
    console.log("We have some error")
}

