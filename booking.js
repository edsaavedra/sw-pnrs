const fetch = require("node-fetch");
const BASE_URL = 'https://southwest.dev8.southwest.com/api/air-booking/v1/air-booking/page/air/booking/';
let shopping_payload = {
    adultPassengersCount: "1",
    application: "air-booking",
    departureDate: "2020-02-12",
    departureTimeOfDay: "ALL_DAY",
    destinationAirportCode: "DAL",
    fareType: "USD",
    originationAirportCode: "HOU",
    passengerType: "ADULT",
    returnDate: "2020-02-15",
    returnTimeOfDay: "ALL_DAY",
    seniorPassengersCount: "0",
    site: "southwest",
    tripType: "roundtrip"
}
const getPnr = function () {
    console.info('%c 💩 ', 'background: #ffbf27', `${BASE_URL}shopping`);
    fetch(`${BASE_URL}shopping`, {
        method: "POST",
        headers: {
            "x-user-experience-id": "6686d5f2-bce2-401e-990f-b9e787250115",
            "x-channel-id": "southwest",
            "x-api-key": "l7xx72f4d7a942b94b648fddadedcc7fe4f3",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(shopping_payload)
    })
        .then(data => data.json())
        .then(data => {
            console.log('%c 💩 ', 'background: #ffbf27', data.data.searchResults);
        })
        .catch(err => {
            console.log('%c 💩 ', 'background: #ffbf27', err);
        });
}

getPnr();