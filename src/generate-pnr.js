import confirmation_payload from './confirmation-payload';
import faker from 'faker';

const BASE_URL = 'https://southwest.dev8.southwest.com/api/air-booking/v1/air-booking/page/air/booking/';
let response_shopping;
let response_price;
let price_payload = {
    adultPassengersCount: "1",
    currencyCode: "USD",
    currencyType: "REVENUE",
    requiredPricingInfo: true,
    segmentProducts: [],
    seniorPassengersCount: "0",
    application: "air-booking",
    site: "southwest"
};
const headers = {
    "Content-Type": "application/json",
    "x-api-key": "l7xx72f4d7a942b94b648fddadedcc7fe4f3",
    "x-channel-id": "southwest"
};
const generateDate = plusDays => {
    const today = new Date();
    let newDate = today;
    newDate.setDate(today.getDate() + plusDays);
    return newDate.toISOString().slice(0, 10);
};
const shopping_payload = JSON.stringify({
    adultPassengersCount: "1",
    application: "air-booking",
    departureDate: generateDate(1),
    departureTimeOfDay: "ALL_DAY",
    destinationAirportCode: "DAL",
    fareType: "USD",
    originationAirportCode: "HOU",
    passengerType: "ADULT",
    returnDate: generateDate(5),
    returnTimeOfDay: "ALL_DAY",
    seniorPassengersCount: "0",
    site: "southwest",
    tripType: "roundtrip"
});

const getPricePayload = airProducts => {
    const segmentProducts = [];

    for (let product in airProducts) {
        airProducts[ product ].details.find(detail => {
            const productInfo = detail.fareProducts.ADULT;
            const hasAny = productInfo.hasOwnProperty("ANY");
            if (hasAny) {
                segmentProducts.push({
                    ADULT: productInfo.ANY.productId
                });
            }
            return hasAny;
        });
    };

    price_payload = Object.assign(price_payload, {
        segmentProducts
    });

    return price_payload;
}

const generatePassengers = numberOfPassengers => {
    const passengerList = [];

    while (numberOfPassengers > 0) {
        passengerList.push(Object.assign(confirmation_payload.passengersList[0], {
            passengerFirstName: faker.name.firstName(),
            passengerLastName: faker.name.lastName()
        }));
        numberOfPassengers--;
    }

    return passengerList;
}

const getPnr = params => {
    let pnrData = {};
    generatePassengers(params.passengers)
    fetch(`${BASE_URL}shopping`, {
        body: shopping_payload,
        headers: Object.assign(headers, { "x-user-experience-id": "6686d5f2-bce2-401e-990f-b9e787250115" }),
        method: "POST"
    })
        .then(data => data.json())
        .then(data => {
            response_shopping = data.data;
            return fetch(`${BASE_URL}price`, {
                body: JSON.stringify(getPricePayload(data.data.searchResults.airProducts)),
                headers: Object.assign(headers, { "x-user-experience-id": "d6cf3f33-ff44-473f-86b7-be8f0d0f399a" }),
                method: "POST"
            });
        })
        .then(data => data.json())
        .then(data => {
            response_price = data.data;
            confirmationTransformer(response_shopping, response_price);
            return fetch(`${BASE_URL}confirmation`, {
                body: JSON.stringify({}),
                headers: Object.assign(headers, { "x-user-experience-id": "d6cf3f33-ff44-473f-86b7-be8f0d0f399a" }),
                method: "POST"
            })
        })
        .then(data => data.json())
        .then(data => {
            pnrData = data
        })
        .catch(err => {
            pnrData = err;
            return new Error(err);
        });

    return pnrData;
}

export default getPnr;


const confirmationTransformer = (shopping, price) => {
    const airProduct = Object.assign(confirmation_payload.cartProducts.air, {
        
    })
    const payload = Object.assign(confirmation_payload, {
        airProduct
    });
    console.info('%c 💩 ', 'background: #ffbf27', payload);
    return payload;
}