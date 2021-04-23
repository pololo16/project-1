// * Tic Tac Toe



//! Make it look nice
//! reset game
//! stupid bug
let mainGame = []
let playerOneSelectionBigger = []
let playerTwoSelectionBigger = []

const biggerGrid = document.querySelector('.biggerGrid')
const playAgain = document.querySelector('#playAgain')
const playerOneScore = document.querySelector('#playerOneScore')
const playerTwoScore = document.querySelector('#playerTwoScore')
const width = 9
const cells = []
let playerOneTurn = true

let nextGamePlay = null
let game
let winsPlayerOne = 0
let winsPlayerTwo = 0
const playerScores = 1
let tie = 0

// !llamar funcion initVariable
// !player winsPlayerOne = 0
// !next box 0


function initVariables() {
  mainGame = []
  for (let i = 0; i < width; i++) {
    mainGame.push({
      playerOneSelection: [],
      playerTwoSelection: [],
      winner: null,
    })
  }
  playerOneSelectionBigger = []
  playerTwoSelectionBigger = []

  nextGamePlay = null
  tie = 0

  removeClassGame()
}

initVariables()
theWholeGame()

playAgain.addEventListener('click', () => {
  initVariables()
  winsPlayerOne = 0
  winsPlayerTwo = 0
  playerOneScore.innerHTML = 0
  playerTwoScore.innerHTML = 0
})

function styleGrid(element, i, numbered = null) {
  if (i === 0) {
    element.classList.add('cero')
  } else if (i === 1) {
    element.classList.add('one')
  } else if (i === 2) {
    element.classList.add('two')
  } else if (i === 3) {
    element.classList.add('three')
  } else if (i === 4) {
    element.classList.add('four')
    if (numbered != null) {
      element.innerHTML = numbered + 1
    }
  } else if (i === 5) {
    element.classList.add('five')
  } else if (i === 6) {
    element.classList.add('six')
  } else if (i === 7) {
    element.classList.add('seven')
  } else if (i === 8) {
    element.classList.add('eight')
  }
}

function theWholeGame() {
  for (let i = 0; i < width; i++) {
    const grid = document.createElement('div')
    biggerGrid.appendChild(grid)
    styleGrid(grid, i)

    for (let index = 0; index < width; index++) {
      const div = document.createElement('div')
      grid.appendChild(div)
      
      cells.push(div)
      styleGrid(div, index, i)
      // takes div and i
      div.addEventListener('click', (event) => {
        for (let i = 0; i < 9; i++) {
          const tots = biggerGrid.children
          tots[i].style.backgroundColor = 'white'
        }
        if (mainGame[i].winner != null) {
          alert('This game has already been won')
          nextGamePlay = null
        } else {
          if (nextGamePlay != null && nextGamePlay != i) {
            game = nextGamePlay + 1
            // alert('You need to play in square ' + game)
            const dd = biggerGrid.children
            dd[nextGamePlay].style.backgroundColor = '#ddd'
          } else {
            // quitar el color
            // const dd = biggerGrid.children
            // dd[nextGamePlay].style.backgroundColor = '#fff'
            nextGamePlay = index
            if (mainGame[index].winner != null) {
              nextGamePlay = null
            }
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
                for (let index = 0; index < eachCell.length; index++) {
                  eachCell[index].classList.remove('red')
                  eachCell[index].classList.add('blue')
                }
                if (resultBigger) {
                  alert('Congrutulations! Player 1 wins game!')
                  winsPlayerOne++
                  playerOneScore.innerHTML = ' ' + (Number(winsPlayerOne))
                  initVariables()
                } else {
                  const cellTotals = playerOneSelectionBigger.length + playerTwoSelectionBigger.length + tie
                  if (cellTotals == 9) {
                    alert('Big Tie!')
                    initVariables()
                  }
                }
              } else {
                const cellTotals = mainGame[i].playerOneSelection.length + mainGame[i].playerTwoSelection.length
                if (cellTotals == 9) {
                  tie++
                  mainGame[i].winner = false
                  alert('Tie!')
                }
              }
            } else {
              div.classList.add('red')
              mainGame[i].playerTwoSelection.push(index)
              const result = includesAll(mainGame[i].playerTwoSelection)
              if (result) {
                mainGame[i].winner = true
                playerTwoSelectionBigger.push(i)
                game = i + 1
                alert('Player 2 wins square ' + game)
                const resultBigger = includesAll(playerTwoSelectionBigger)
                const eachCell = grid.querySelectorAll('div')
                for (let index = 0; index < eachCell.length; index++) {
                  eachCell[index].classList.remove('blue')
                  eachCell[index].classList.add('red')
                }
                if (resultBigger) {
                  alert('Congrutulations! Player 2 wins game!')
                  winsPlayerTwo++
                  playerTwoScore.innerHTML = ' ' + (Number(winsPlayerTwo))
                  initVariables()
                } else {
                  const cellTotals = playerOneSelectionBigger.length + playerTwoSelectionBigger.length + tie
                  if (cellTotals == 9) {
                    alert('Big Tie!')
                    initVariables()
                  }
                }
              } else {
                const cellTotals = mainGame[i].playerOneSelection.length + mainGame[i].playerTwoSelection.length
                if (cellTotals == 9) {
                  tie++
                  mainGame[i].winner = false
                  alert('Tie!')
                }
              }
            }
            playerOneTurn = !playerOneTurn
            document.getElementById('turn').innerHTML = (playerOneTurn == true) ? '❌' : '⭕️'
            // document.getElementById('boxNumber').innerHTML = (Number(nextGamePlay)+1)
            if (nextGamePlay === null ) {
              document.getElementById('boxNumber').innerHTML = 'Choose random'
            } else {
              document.getElementById('boxNumber').innerHTML = (Number(nextGamePlay) + 1)
            }
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
    let count = 0
    for (const selection of selectionArray) {
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

function removeClassGame() {
  Array.from(biggerGrid.children).forEach(square => {
    Array.from(square.children).forEach(littleSquare => {
      littleSquare.classList.remove('red')
      littleSquare.classList.remove('blue')
    })
  })
}