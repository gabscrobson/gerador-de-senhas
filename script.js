const passwordEl = document.querySelector('#password')
const clipboardEl = document.querySelector('#copy-icon')
const rangeEl = document.querySelector('#range')
const charactersEl = document.querySelector('#charLenght')
const upperEl = document.querySelector('#upper')
const lowerEl = document.querySelector('#lower')
const numberEl = document.querySelector('#number')
const symbolEl = document.querySelector('#symbol')
const buttonEl = document.querySelector('button')

var characters, hasUpper, hasLower, hasNumber, hasSymbol

updateCharacters()
rangeEl.oninput = updateCharacters

function updateCharacters() {
    characters = rangeEl.value
    charactersEl.textContent = characters
}
