// камень-ножницы в ООП
function stonePaperScissors () {
    let players = {
        comp: 0,
        user: 0,
        match () {
            if ((this.user === 0 && this.comp === 1) || (this.user === 1 && this.comp === 2) || (this.user === 2 && this.comp === 0)) {
                return ('Пользователь победил! ' + this.translate (this.user) +'; ' + this.translate (this.comp))
            } else if (this.comp === this.user) {
                return ('Ничья')
            } else {
                return ('Пользователь проиграл! ' + this.translate (this.user) +'; ' + this.translate (this.comp))
            }
        },
        translate (ch) {
            return ch === 0 ? 'Камень' : (ch === 1 ? 'Ножницы' : 'Бумага')
        }
    }
    players.user = +prompt ("Камень = 0, Ножницы = 1, Бумага = 2, Конец игры = 3")
    players.comp = getPC ()
    if (players.user != 3) {
        console.log (players.match ())
        stonePaperScissors ()
    }
}

