let wordLength = 6
let length = 0
let word = new Array()
let row = 1
let playable = 0

fetch("./js/json1.json")
    .then(response => response.json())
    .then(dictionnary => {

        let wordToFind = dictionnary.mots[Math.floor(Math.random() * 21)]

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
                        let verification = 0

                        if (compare === true) {

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
                        }

                        // Affichage gagné ou perdu
                        console.log(row, verification)
                        if (verification === 6) {
                            playable++
                            document.getElementById('annonce').innerText = `Gagné, le mot était ${wordToFind}`
                            document.getElementById('retry').innerHTML = `<a href="./index.html" class="btn btn-wide">Recommencer</a>`
                        }
                        if (verification !== 6 && row == 6) {
                            playable++
                            document.getElementById('annonce').innerText = `Perdu, le mot était '${wordToFind}'`
                            document.getElementById('retry').innerHTML = `<a href="./index.html" class="btn btn-wide">Recommencer</a>`
                        }

                        word.splice(0, 6)
                        row++
                        length = 0

                    }
                }
            }

            // Si le joueur fait entrée en fin de partie pour relancer
            if (event.key == 'Enter' && playable == !0) {
                location.reload()
            }

        })

        console.log(wordToFind)
    })