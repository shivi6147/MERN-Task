// create the object which is capable of making an API call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v2/all", true);

// Send the Request to the Server 
request.send(null);

//parse the text passed on from the server
request.onload = function () {
    try {
        var response = JSON.parse(request.responseText);

        // a. Get all the countries from Asia continent /region using Filter function ?

        const country_name1 = response.filter((country) => {
            if (country.region === "Asia") {
                console.log(country.name);
            }
        });

        console.log("######################################################");

        // b. Get all the countries with a population of less than 2 lakhs using Filter function ?

        const country_name2 = response.filter((country) => {
            if (country.population < 200000) {
                console.log(country.name);
            }
        });

        console.log("######################################################");

        // c. Print the following details name, capital, flag using forEach function ?

        response.forEach((country) => {
            console.log("#################### Country Details ################");
            console.log(country.name);
            console.log(country.capital);
            console.log(country.flags.png);
        });

        console.log("######################################################");

        // d. Print the total population of countries using reduce function ?

        const country_population = response.map((country) => { return country.population });

        const totalPopulation = country_population.reduce((preVal, curVal) => { return (preVal + curVal) });
        console.log(`Total Population of all countries is ${totalPopulation}`);

        console.log("######################################################");

        // e. Print the country which uses US Dollars as currency.?

        const currencies = [];
        const currArr = [];

        response.forEach((country) => {
            currencies.push(country.currencies);
        });

        currencies.forEach((x, i, arr) => {
            currArr.push(arr[i]);
        });


        currArr.forEach((x) => {
            if (x[0].symbol === "$") {
                console.log(x[0].name);
            }
        });

        console.log("######################################################");

    } catch (error) {
        console.log("I have an error");
    }

}
