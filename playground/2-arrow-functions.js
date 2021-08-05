const myEvent = {
    name: 'Birthday',
    guestList: ['Andy', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guests for ' + this.name)
        //use arrow function to retrieve this value
        // this.guestList.forEach(function(guest) {
        //     console.log(guest + ' is attending ' + this.name)
        // })
        //use arrow function to retrieve this value
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

myEvent.printGuestList();