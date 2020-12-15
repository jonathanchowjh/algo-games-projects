import React, { useRef, useEffect, useState } from 'react'

const SIZE = 300
const GRID = 3
const PLAYER = 'X'
const AI = 'O'
const PLY = 10
const tileSize = SIZE / GRID
let INITIAL_STATE = new Array(GRID)
for (let i = 0; i < GRID; i++) {
  INITIAL_STATE[i] = new Array(GRID)
    for (let j = 0; j < GRID; j++) {
      INITIAL_STATE[i][j] = ''
    }
}

const TTTGame = (props) => {
  const canvasRef = useRef(null)
  const { handleShow } = props
  const [state, setState] = useState(INITIAL_STATE)
  useEffect(() => {
    drawBoard()
  }, [])

  const drawBoard = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let iter = 0;
    for (let i = 0; i < GRID; i++) {
      iter === GRID ? iter = 1 : iter = 0;
      for (let j = 0; j < GRID; j++) {
        if (iter++ % 2 === 0) {
          ctx.fillStyle = '#b5d1ff';
        } else {
          ctx.fillStyle = '#e8e8e8';
        }
        ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
    canvas.addEventListener('click', (e) => {
      let rect = canvas.getBoundingClientRect()
      const pos = {
        x: Math.floor((e.clientX - rect.left) / tileSize),
        y: Math.floor((e.clientY - rect.top) / tileSize)
      }
      handleClick(pos)
    })
  }

  const drawPlay = (pos, player) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.font = '' + tileSize / 2 + 'px serif';
    ctx.fillStyle = '#4f4f4f';
    ctx.fillText(player, (pos.x * tileSize) + (tileSize / 3), (pos.y * tileSize) + (tileSize / 3 * 2));
  }

  const isFilled = (s) => {
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        if (s[i][j] === '') return false
      }
    }
    return true
  }

  const winCondition = (s, player) => {
    // check rows & cols
    for (let i = 0; i < GRID; i++) {
      let rows = true;
      let cols = true;
      for (let j = 1; j < GRID; j++) {
        if (rows && (s[i][j] === '' || s[i][j] !== s[i][j - 1])) rows = false
        if (cols && (s[j][i] === '' || s[j][i] !== s[j - 1][i])) cols = false
      }
      if (rows) return s[i][0] == player ? 'WIN' : 'LOSE'
      if (cols) return s[0][i] == player ? 'WIN' : 'LOSE'
    }
    // check diagonals
    let left = true;
    let right = true;
    for (let i = 1; i < GRID; i++) {
      if (left && (s[i][i] === '' || s[i][i] !== s[i - 1][i - 1])) left = false
      if (right && (s[i][GRID - i - 1] === '' || s[i][GRID - i - 1] !== s[i - 1][GRID - i])) right = false
    }
    if (left) return s[0][0] == player ? 'WIN' : 'LOSE'
    if (right) return s[0][GRID - 1] == player ? 'WIN' : 'LOSE'
    // check Draw
    if (isFilled(s)) return 'DRAW'
    return null
  }

  const alphaBeta = (s, ply, player, opponent, original) => {
    if (ply <= 0) return [null, 0]
    const gameState = winCondition(s, original)
    if (gameState !== null) {
      if (gameState === 'DRAW') return [null, 0]
      if (gameState === 'WIN') return [null, ply * 1]
      if (gameState === 'LOSE') return [null, ply * -1]
    }

    let best = [null, null]
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        if (s[i][j] !== '') continue
        s[i][j] = player
        let [move, score] = alphaBeta(s, ply - 1, opponent, player, original)
        s[i][j] = ''
        if (best[1] === null) {
          best = [[i,j], score]
          continue
        }
        if (Math.abs(score) >= ply - 1) return [[i,j], score]
        if (player === original) {
          if (score > best[1]) best = [[i,j], score]
        } else {
          if (score < best[1]) best = [[i,j], score]
        }
      }
    }
    return best
  }

  const bestMove = (player, opponent) => {
    let newState = state
    let [move, score] = alphaBeta(newState, PLY, player, opponent, player)
    return { x: move[0], y: move[1] }
  }

  const restart = (winner) => {
    handleShow(winner)
    drawBoard()
    let newState = state
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        newState[i][j] = ''
      }
    }
    setState(newState)
  }

  const handleMove = (move, player) => {
    // check if move is valid
    if (state[move.x][move.y] !== '') {
      console.log("tile not available", state, move)
      return null
    }

    let newState = state
    newState[move.x][move.y] = player
    setState(newState)

    drawPlay(move, player)
    let gameState = winCondition(state, player)
    if (gameState !== null) {
      if (gameState === 'DRAW') return gameState
      if (gameState === 'WIN') return player
      if (gameState === 'LOSE') return player === PLAYER ? PLAYER : AI
      return false // game ended
    }
    return true
  }

  const handleClick = (pos) => {
    const isPlayer = handleMove(pos, PLAYER)
    if (isPlayer == null) return
    if (isPlayer !== true) return restart(isPlayer)

    // calculate AI's move
    const move = bestMove(AI, PLAYER)
    const isAI = handleMove(move, AI)
    if (isAI !== true) return restart(isAI)
  }

  return <canvas
    ref={canvasRef}
    width={SIZE} height={SIZE}
    {...props}
  />
}

export default TTTGame

