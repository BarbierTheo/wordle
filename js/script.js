let wordLength = 6
let length = 0
let word = new Array()
let wordToFind = 'dingue'
let row = 1
let playable = 0

document.addEventListener('keydown', event => {

    if (playable == 0) {
        if (row < 7) {

            // Vérification de la touche du clavier, ajout au DOM
            if (length <= 5 && event.key.match(/[a-zA-Z]/) && event.key.length === 1) {

                length++
                let parent = document.getElementById(`row${row}`)
                let childs = parent.getElementsByClassName(`letter${length}`)
                childs[0].innerText = event.key
                word.push(event.key)
                // console.log(row)
            }

            // Suppression d'un input
            if (event.key == "Backspace" && length >= 1) {


                let parent = document.getElementById(`row${row}`)
                let childs = parent.getElementsByClassName(`letter${length}`)
                childs[0].innerText = ""
                word.pop()
                length--

            }

            // Vérification du mot
            if (length > 5) {

                let compare = word.some(lettre => wordToFind.includes(lettre))
                const wordToFindSplit = wordToFind.split('')

                if (compare === true) {

                    // console.log(compare)
                    // console.log(word + wordToFindSplit)
                    let verification = 0

                    for (let i = 1; i <= 6; i++) {

                        // console.log(word[i - 1], wordToFindSplit[i - 1])
                        // Si une lettre = une lettre
                        if (word[i - 1] === wordToFindSplit[i - 1]) {

                            // console.log(i)
                            let parent = document.getElementById(`row${row}`)
                            let childs = parent.getElementsByClassName(`letterbox${i}`)
                            // console.log(childs[0])
                            childs[0].classList.add('bg-green-900')
                            verification++

                        }

                        // Si le mot inclut la lettre
                        if ((wordToFindSplit.includes(word[i - 1]) === true) && (word[i - 1] !== wordToFindSplit[i - 1])) {

                            let parent = document.getElementById(`row${row}`)
                            let childs = parent.getElementsByClassName(`letterbox${i}`)
                            // console.log(childs[0])
                            childs[0].classList.add('bg-orange-800')


                        }

                    }

                    // console.log(row, verification)
                    if (verification === 6) {
                        playable++
                        document.getElementById('annonce').innerText = `Gagné, le mot était ${wordToFind}`
                    }
                    if (verification !== 6 && row == 6) {
                        document.getElementById('annonce').innerText = `Perdu, le mot était ${wordToFind}`
                    }

                }

                word.splice(0, 6)

                row++
                // console.log(row)
                length = 0


            }
        }
    }
})

