const coffeeList = document.getElementById('coffeeList')

function addSingleCoffee(coffee) {
    const newListItem = document.createElement('li')
    const newText = document.createTextNode(coffee.title)
    newListItem.appendChild(newText)
    return newListItem
}

function newCoffeeList(listOfCoffees) {
    const newList = document.createElement('ul')
    // loop through list of coffees and add each one to this list
    listOfCoffees.forEach(coffee => {
        const thisItem = addSingleCoffee(coffee)
        newList.appendChild(thisItem)
    })
    coffeeList.innerText = ''
    coffeeList.appendChild(newList)
}

function getCoffee(type) {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
    .then(doc => doc.json()) // just need the json body...
    .then(data => { // we got the json data
        // we got the list of coffee.. now let's put it on the screen
        newCoffeeList(data)
    })
    .catch(console.error())
}
