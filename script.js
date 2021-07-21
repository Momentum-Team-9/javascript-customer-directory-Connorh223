console.log(customers)

// Sophia Burns
const outputDiv = document.getElementById('root')
const customerCard = document.createElement('div')
const customer = customers[0]
for (let customer of customers) { 
    

customerCard.classList.add('customer')

const picture = document.createElement('img')
picture.src = customer.picture.large
customerCard.appendChild(picture)
// outputDiv.appendChild.picture
// name
const firstName = document.createElement('h1')
firstName.innerText = customer.name.first
const lastName = customer.name.last
firstName.innerText += ' ' + lastName
customerCard.appendChild(firstName)
// outputDiv.appendChild(customerCard)

// email
const email = document.createElement('div')
email.innerText = customer.email
customerCard.appendChild(email)

// address
const streetNumber = document.createElement('dl')
streetNumber.innerText = customer.location.street.number
// customerCard.appendChild(streetNumber)
const streetName = customer.location.street.name
streetNumber.innerText += ' ' + streetName
customerCard.appendChild(streetNumber)
// outputDiv.appendChild(customerCard)
// NEED TO FIX FORMAT^^^
// (fixed it)

// NEW LINE 
// city state zip
const city = document.createElement('dl')
city.innerText = customer.location.city
// customerCard.appendChild(city)
const state = customer.location.state
// city.innerText += ', ' + state
// customerCard.appendChild(state)
const postcode = customer.location.postcode
city.innerText += ', ' + state + ' ' + postcode
customerCard.appendChild(city)
// outputDiv.appendChild(customerCard)

// NEW LINE
// "dob..."
const date = document.createElement('p')
date.innerText = "DOB; " + moment(customer.dob.date). format("MMM DD, YYYY")
customerCard.appendChild(date)
// NEW LINE 

// "member since..."
const registered = document.createElement('p')
registered.innerText = "Member since " + moment(customer.registered.date). format("MMM DD, YYYY")
customerCard.appendChild(registered)


// function FillCustomerCard(customers) {
//     let (i = 0)
//     for (i = 0; i < customers.length; i++) {
//         if (customers[i].name.first = customers.name.first) {
            

//             outputDiv.appendChild(customerCard)
//         }
//     }
// }



outputDiv.appendChild(customerCard)}