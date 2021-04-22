// * Tic Tac Toe



//! Make it look nice
//! reset game
//! stupid bug


const mainGame = [
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
  {
    playerOneSelection: [],
    playerTwoSelection: [],
    winner: null,
  },
]

let playerOneSelectionBigger = []
let playerTwoSelectionBigger = []

const biggerGrid = document.querySelector('.biggerGrid')
const playAgain = document.querySelector('#playAgain')

const width = 9
const cells = []
let playerOneTurn = true

// for (let i = 0; i < mainGame.length; i++) {
//   const gameCells = document.createElement('div')
//   biggerGrid.appendChild(div)
//   div.innerHTML = i
//   cells.push(div)
let nextGamePlay = null;
let game
let eachCell

playAgain.addEventListener('click', () => {
  resetGame()
  nextGamePlay = null
  document.getElementById('boxNumber').innerHTML = 'Choose random'
  
  playerOneTurn = true
})
theWholeGame()
function theWholeGame() {
  for (let i = 0; i < width; i++) {
    const grid = document.createElement('div')
    biggerGrid.appendChild(grid)
    if (i === 0) {
      grid.classList.add('cero')
    }
    if (i === 1) {
      grid.classList.add('one')
    }
    if (i === 2) {
      grid.classList.add('two')
    }
    if (i === 3) {
      grid.classList.add('three')
    }
    if (i === 4) {
      grid.classList.add('four')
    }
    if (i === 5) {
      grid.classList.add('five')
    }
    if (i === 6) {
      grid.classList.add('six')
    }
    if (i === 7) {
      grid.classList.add('seven')
    }
    if (i === 8) {
      grid.classList.add('eight')
    }
    for (let index = 0; index < width; index++) {
      const div = document.createElement('div')
      grid.appendChild(div)
      
      cells.push(div)
      if (index === 0) {
        div.classList.add('cero')
      }
      if (index === 1) {
        div.classList.add('one')
      }
      if (index === 2) {
        div.classList.add('two')
      }
      if (index === 3) {
        div.classList.add('three')
      }
      if (index === 4) {
        div.classList.add('four')
        div.innerHTML = (i + 1)
      }
      if (index === 5) {
        div.classList.add('five')
      }
      if (index === 6) {
        div.classList.add('six')
      }
      if (index === 7) {
        div.classList.add('seven')
      }
      if (index === 8) {
        div.classList.add('eight')
      }
      // takes div and i
      div.addEventListener('click', (event) => {
      // console.log(mainGame[i])
        console.log(i)
        if (mainGame[i].winner) {
          alert('This game has already been won')
          nextGamePlay = null
        // } else if (index.classList.contains('blue')){
        //   alert('This field has already been played')
        // } else if (index.classList.contains('red')){
        //   (mainGame[i].classList.contains('blue'))
        } else {
          if (nextGamePlay != null && nextGamePlay != i) {
            game = nextGamePlay + 1
            alert('You need to play in square ' + game)
          } else {
            nextGamePlay = index
            if (mainGame[index].winner) {
              nextGamePlay = null
            }
            console.log("P 1:", nextGamePlay)
            // console.log(event)
            if (playerOneTurn === true) {
              div.classList.add('blue')
              mainGame[i].playerOneSelection.push(index)
              const result = includesAll(mainGame[i].playerOneSelection)
              if (result) {
                mainGame[i].winner = true
                playerOneSelectionBigger.push(i)
                game = i + 1
                alert('Player 1 wins square ' + game)
                const resultBigger = includesAll(playerOneSelectionBigger)
                const eachCell = grid.querySelectorAll('div')
                // console.log(grid)
                for (let index = 0; index < eachCell.length; index++) {
                  eachCell[index].classList.remove('red')
                  eachCell[index].classList.add('blue')
                }
                if (resultBigger) {
                  alert('Congrutulations! Player 1 wins game!')

                }
              }
            } else {
              div.classList.add('red')
              mainGame[i].playerTwoSelection.push(index)
              // console.log('else ', mainGame[i].playerTwoSelection)
              const result = includesAll(mainGame[i].playerTwoSelection)
              if (result) {
                mainGame[i].winner = true
                playerTwoSelectionBigger.push(i)
                game = i + 1
                alert('Player 2 wins square ' + game)
                const resultBigger = includesAll(playerTwoSelectionBigger)
                const eachCell = grid.querySelectorAll('div')
                // console.log(game)
                for (let index = 0; index < eachCell.length; index++) {
                  eachCell[index].classList.remove('blue')
                  eachCell[index].classList.add('red')
                }
                if (resultBigger) {
                  alert('Congrutulations! Player 2 wins game!')
                  resetGame()
                }
              }
            }
            playerOneTurn = !playerOneTurn
            document.getElementById('turn').innerHTML = (playerOneTurn == true) ? '❌' : '⭕️'
            // document.getElementById('boxNumber').innerHTML = (Number(nextGamePlay)+1)
            if (nextGamePlay === null ) {
              document.getElementById('boxNumber').innerHTML = 'Choose random'
            } else {
              document.getElementById('boxNumber').innerHTML = (Number(nextGamePlay)+1)
            }
          // console.log(index)
          }
        }
      })
    }
  }
}


//Game Working

function checkedSelected(selection) {
  if (playerOneSelection.includes(selection) || playerTwoSelection.includes(selection)) {
    return true
  }
  return false
}
// recorrer todos los resultados posible
// recorrer las selecciones del jugador
// preguntar si las selecciones del jugador aplican para ganar la partida
// retornar verdaro si es correcto
// retornar falso si no lo es

function includesAll(selectionArray) {
  for (const numbers of AllWinningCombos) {
    // console.log('numbers: ', numbers)
    let count = 0
    for (const selection of selectionArray) {
      // console.log('selection', selection)
      if (numbers.includes(selection)) {
        count++
      }
    }
    if (count === 3) {
      return true
    }
  }
  return false
}

const AllWinningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function resetGame() {
  Array.from(biggerGrid.children).forEach(square => {
    Array.from(square.children).forEach(littleSquare => {
      littleSquare.classList.remove('red')
      littleSquare.classList.remove('blue')
    })
  })
  console.log(mainGame)
  mainGame.reset()
  console.log(mainGame)
}