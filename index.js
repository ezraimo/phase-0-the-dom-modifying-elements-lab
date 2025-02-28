// Remove the <main> with id 'main'
document.querySelector('main#main').remove()

// Create new header element
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'Serem is the champion'

// Append the newHeader to the body
document.body.appendChild(newHeader)
