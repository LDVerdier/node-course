// console.log('Hey !');


// const url = 'http://puzzle.mead.io/puzzle'


// .catch((error) => {console.log(error)})
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value 
    if (location) {
        messageOne.textContent = 'loading...'
        messageTwo.textContent = ''
        const url = 'http://localhost:3000/weather?address=' + location
        fetch(url)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                    return console.log(data.error)
                }
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.forecast, data.location)
            })
        })
    }
})

