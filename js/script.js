// камень-ножницы в ООП

let players = {
    comp: '',
    user: '',
    inputButtonContainer: '.btm-block',
    screenContainer: '.screen',
    scoreContainer: '.score',
    _init () {
        document.querySelector (this.inputButtonContainer).addEventListener ('click', (evt) => {
            choice = evt.target.name 
            if ((choice === 'rock') || 
                (choice === 'paper') || 
                (choice === 'scissors')) {
                    this.match (choice)
                }
        })
    },
    getPC () {
        return this.translate (Math.floor (Math.random () * 3)) // [0 - 2]
    },
    renderChoices () {
        document.querySelector (this.screenContainer + '-left').innerHTML = this.createHTML (this.user)
        document.querySelector (this.screenContainer + '-right').innerHTML = this.createHTML (this.comp)
    },
    createHTML (choice) {
        if (choice === 'rock') return `<img class="img rock" src="img/rock.png" alt="rock" width="85" height="100">`
        else if (choice === 'paper') return `<img class="img paper" src="img/paper.png" alt="rock" width="143" height="100">`
        else if (choice === 'scissors') return `<img class="img scissors" src="img/scissors.png" alt="rock" width="117" height="100">`
        else return ``
    },
    match (choice) {
        this.user = choice
        this.comp = this.getPC ()
        this.renderChoices ()
        this.score ()
    },
    score () {
        if ((this.user === 'rock' && this.comp === 'scissors') || 
            (this.user === 'scissors' && this.comp === 'paper') || 
            (this.user === 'paper' && this.comp === 'rock')) {
            +document.querySelector (this.scoreContainer + '-player').innerText++
        } else if (this.comp === this.user) {
            
        } else {
            +document.querySelector (this.scoreContainer + '-comp').innerText++
        }
    },
    translate (ch) {
        return ch === 0 ? 'rock' : (ch === 1 ? 'scissors' : 'paper')
    }
}

players._init ()

// players.user = +prompt ("Камень = 0, Ножницы = 1, Бумага = 2, Конец игры = 3")
// players.comp = getPC ()
// if (players.user != 3) {
//     console.log (players.match ())
//     stonePaperScissors ()
// }

