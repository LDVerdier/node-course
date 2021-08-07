//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const { request } = require("node:https");



const add = (firstNumber, secondNumber, callback) => {
    const sum = firstNumber + secondNumber
    setTimeout(() => {
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

// const forecast = (lat, lon, callback) => {
//     // request on weatherstack URL with lat and lon
//     const url = 'someURL' + lat + lon
//     request({url, json: true}, (error, response) => {
//         if(error) {
//             callback('Network error', undefined)
//         } else if(response.body.error) {
//             callback('No result', undefined)
//         } else {
//             callback(undefined, response.body.current.features[0])
//         }
//     })
// }

// forecast(-75, 44, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })