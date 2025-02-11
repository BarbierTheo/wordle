let wordLength = 6
let length = 0
let word = new Array()
document.addEventListener('keydown', event => {

    if (length <= 5 && event.key.match(/[a-zA-Z]/) && event.key.length === 1) {
        length++
        document.getElementById(`letter${length}`).innerText = event.key
        word.push(event.key)
        document.getElementById(`word`).innerText = word.join('')
    }
    if (event.key == "Backspace" && length >= 1) {
        document.getElementById(`letter${length}`).innerText = ''
        word.pop()
        document.getElementById(`word`).innerText = word.join('')
        length--
    }

})