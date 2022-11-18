const passwordEl = document.querySelector('#password')
const clipboardEl = document.querySelector('#copy-icon')
const rangeEl = document.querySelector('#range')
const charactersEl = document.querySelector('#charLenght')
const upperEl = document.querySelector('#upper')
const lowerEl = document.querySelector('#lower')
const numberEl = document.querySelector('#number')
const symbolEl = document.querySelector('#symbol')
const buttonEl = document.querySelector('button')
const strengthLevelEl = document.querySelector('#strengthLevelText')
const strengthRepEl = document.querySelectorAll('.strengthRep')

var characters, hasUpper, hasLower, hasNumber, hasSymbol

updateCharacters()
rangeEl.oninput = updateCharacters

updateStrength()
upperEl.oninput = updateStrength
lowerEl.oninput = updateStrength
numberEl.oninput = updateStrength
symbolEl.oninput = updateStrength

buttonEl.addEventListener('click', generatePassword)

function updateCharacters() {
    characters = rangeEl.value
    charactersEl.textContent = characters
    updateStrength()
}

generatePassword()

function updateStrength() {
    let strength = 0
    getHas()
    if(characters >= 10)
        strength+=1
    if(characters >= 20)
        strength+=1
    if(hasUpper)
        strength+=1
    if(hasLower)
        strength+=1
    if(hasNumber)
        strength+=1
    if(hasSymbol)
        strength+=1

    if(strength > 4) {
        strengthLevelEl.textContent = 'ALTA'
        for(var i in strengthRepEl) {
            strengthRepEl[i].style.backgroundColor = '#75fa61'
            strengthRepEl[i].style.borderColor = '#75fa61'
        }
    }
    else if(strength > 2) {
        strengthLevelEl.textContent = 'MÉDIA'

        strengthRepEl[0].style.backgroundColor = '#edff7a'
        strengthRepEl[0].style.borderColor = '#edff7a'
        strengthRepEl[1].style.backgroundColor = '#edff7a'
        strengthRepEl[1].style.borderColor = '#edff7a'
        strengthRepEl[2].style.backgroundColor = 'var(--background2)'
        strengthRepEl[2].style.borderColor = 'white'
    }
    else {
        strengthLevelEl.textContent = 'BAIXA'
        strengthRepEl[0].style.backgroundColor = '#fa6161'
        strengthRepEl[0].style.borderColor = '#fa6161'
        strengthRepEl[1].style.backgroundColor = 'var(--background2)'
        strengthRepEl[1].style.borderColor = 'white'
        strengthRepEl[2].style.backgroundColor = 'var(--background2)'
        strengthRepEl[2].style.borderColor = 'white'
    }
}

function getHas() {
    hasUpper = upperEl.checked
    hasLower =  lowerEl.checked
    hasNumber = numberEl.checked
    hasSymbol = symbolEl.checked
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    var password = ''
    var passwordChar = 0
    getHas()

    // for(var i = 0; i < characters; i++) {
    //     if(i%5 == 0)
    //         password += getRandomUpper()
    //     else if(i%5 == 1)
    //         password += getRandomLower()
    //     else if(i%5 == 2)
    //         password += getRandomNumber()
    //     else
    //         password += getRandomSymbol()
    // }

    while(passwordChar < characters){
        let randomFactor = getRandomNumber()

        if(randomFactor > 4){
            randomFactor = getRandomNumber()
            if(randomFactor > 4) {
                if(hasUpper) {
                    password += getRandomUpper()
                    passwordChar++
                }
            }
            else {
                if(hasLower) {
                    password += getRandomLower()
                    passwordChar++
                }
            }
        }
        else if(randomFactor > 0) {
            if(hasNumber) {
                password += getRandomNumber()
                passwordChar++
            }
        }
        else {
            if(hasSymbol) {
                password += getRandomSymbol()
                passwordChar++
            }
        }
    }

    passwordEl.textContent = password
}