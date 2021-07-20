console.log(customers)

// Sophia Burns
const outputDiv = document.getElementById('root')
const customerCard = document.createElement('div')

customerCard.classList.add('customer')

// const customerPic = document.createElement('img')
// customerPic.src = customers[0].picture
// outputDiv.appendChild.customerPic
// name
const firstName = document.createElement('h1')
firstName.innerText = customers[0].name.first
const lastName = customers[0].name.last
firstName.innerText += ' ' + lastName
customerCard.appendChild(firstName)
outputDiv.appendChild(customerCard)

// email
const email = document.createElement('div')
email.innerText = customers[0].email
customerCard.appendChild(email)

// address
const streetNumber = document.createElement('dl')
streetNumber.innerText = customers[0].location.street.number
// customerCard.appendChild(streetNumber)
const streetName = customers[0].location.street.name
streetNumber.innerText += ' ' + streetName
customerCard.appendChild(streetNumber)
outputDiv.appendChild(customerCard)
// NEED TO FIX FORMAT^^^
// (fixed it)

// NEW LINE 
const city = document.createElement('dl')
city.innerText = customers[0].location.city
// customerCard.appendChild(city)
const state = customers[0].location.state
// city.innerText += ', ' + state
// customerCard.appendChild(state)
const postcode = customers[0].location.postcode
city.innerText += ', ' + state + ' ' + postcode
customerCard.appendChild(city)
outputDiv.appendChild(customerCard)
// NEW LINE
// "dob..."
const date = document.createElement('p')
date.innerText = customers[0].dob.date
customerCard.appendChild(date)
// NEW LINE - FIX THIS SHIT ^
// "member since..."
const registered = document.createElement('p')
registered.innerText = customers[0].registered.date
customerCard.appendChild(registered)
