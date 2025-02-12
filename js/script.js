let wordLength = 6
let length = 0
let word = new Array()
let wordToFind = 'dingue'
let row = 1

document.addEventListener('keydown', event => {

    if (row < 7) {
        if (length <= 5 && event.key.match(/[a-zA-Z]/) && event.key.length === 1) {

            length++
            let parent = document.getElementById(`row${row}`)
            let childs = parent.getElementsByClassName(`letter${length}`)
            childs[0].innerText = event.key
            word.push(event.key)
            // console.log(row)
        }

        if (event.key == "Backspace" && length >= 1) {


            let parent = document.getElementById(`row${row}`)
            let childs = parent.getElementsByClassName(`letter${length}`)
            childs[0].innerText = ""
            word.pop()
            length--

        }

        if (length > 5) {

            let compare = word.some(lettre => wordToFind.includes(lettre))

            if (compare === true) {
                console.log(compare)
            }

            row++
            console.log(row)
            length = 0

        }
    }
})

