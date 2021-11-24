export default class Game {
    constructor () {
        console.log('init game');
        this.gameType = undefined;
        this.turn = "X"
        this.board = new Array(9).fill(null);
    }

    setGameType(type) {
        if (type == 'pvpc') {
            this.gameType = 'pvpc'
        }
        else {
            this.gameType = 'pvp'
        }
    }


    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

    makeMove(i) {
        // Check for combinations
        if (this.endOfGame()) {
            return;
        }
        // check for free space
        if(this.board[i]) {
            return;
        }
        this.board[i] = this.turn; // X or O
        let winningCombination = this.findWinningCombinations();
        if (!winningCombination) {
        }                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }

    pcMakeMove() {
        if (this.endOfGame()) {
            return;
        }
        let posicionDisponible = []
        for (let i = 0; i < this.board.length; i++) {
            if (!this.board[i]) {
                posicionDisponible.push(i)
            }
        }
        let pcPosition;
        let pcMark;
        if (posicionDisponible.length == 1) {
            pcPosition = posicionDisponible[0];
        } else {
            pcPosition = Math.floor(Math.random() * (posicionDisponible.length - 0) + 0);
            pcMark = posicionDisponible[pcPosition]
        }
        this.board[pcMark] = this.turn;
        
        let winningCombination = this.findWinningCombinations();
        if (!winningCombination) {
        }  

    }


    findWinningCombinations() {
        const winningCombinations = [
            [0,1,2]
            ,[3,4,5]
            ,[6,7,8]
            ,[0,3,6]
            ,[1,4,7]
            ,[2,5,8]
            ,[0,4,8]
            ,[6,4,2]
        ]

        for(const combination of winningCombinations) {
            const [a,b,c] = combination;

            if (this.board[a] && 
                (this.board[a] === this.board[b] &&
                    this.board[a] === this.board[c])) {
                        return combination
                    }
                }
                return false;
    }

    findTieGame() {
        let winningCombination =  this.findWinningCombinations();
        let tieCombination = this.board.every(elem => elem)
        if (winningCombination == false && 
            tieCombination == true) {
                return true
            }
    }

    endOfGame() {
        let winningCombination =  this.findWinningCombinations();
        let tie = this.findTieGame();
        if (winningCombination) {
            return true;
        } else if (tie) {
            return true;
        } else {
            return false
        }
    }

}

