import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

const tiles = document.querySelectorAll('.board-tile');
const restart = document.querySelector('.restart');
const gameType = document.querySelector('.game-type');
const gameTypeDef = document.querySelectorAll('.game-type-def');

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        onTileClick(tile.dataset.index);    
    })
})

restart.addEventListener('click', () => {
    onRestartGame();
    restart.classList.toggle('hidden');
    gameType.classList.toggle('hidden');
})

gameTypeDef.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.getAttribute('data-value') == 'pvp') {
            game.setGameType('pvp')
            gameType.classList.toggle('hidden')
            restart.classList.toggle('hidden')
        } else {
            game.setGameType('pvpc')
            gameType.classList.toggle('hidden')
            restart.classList.toggle('hidden')
        }
    })
})


const onTileClick = (i) => {
    if (game.gameType == undefined) {
        console.log('define gametype');
        return    
    } else if(game.gameType == 'pvpc') {
        game.makeMove(i);
        game.nextTurn();
        gameView.updateBoard(game)
        game.pcMakeMove();
        game.nextTurn()
        gameView.updateBoard(game)
    } else {
        game.makeMove(i);
        game.nextTurn();
        gameView.updateBoard(game)
    }
}

const onRestartGame = () => {
    game = new Game();
    gameView.updateBoard(game)
}

gameView.updateBoard(game);