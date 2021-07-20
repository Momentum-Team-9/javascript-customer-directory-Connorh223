console.log(customers)

// Sophia Burns
const outputDiv = document.getElementById('root')
const customerCard = document.createElement('div')

customerCard.classList.add('customer')
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
customerCard.appendChild(streetNumber)
const streetName = document.createElement('dl')
streetName.innerText = customers[0].location.street.name
customerCard.appendChild(streetName)
// NEED TO FIX FORMAT^^^
// address.innerText = customers[0].location.street.name
// outputDiv.appendChild(customerCard)
// NEW LINE 
const city = document.createElement('dl')
city.innerText = customers[0].location.city
customerCard.appendChild(city)
const state = document.createElement('dl')
state.innerText = customers[0].location.state
customerCard.appendChild(state)
const postcode = document.createElement('dl')
postcode.innerText = customers[0].location.postcode
customerCard.appendChild(postcode)
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
