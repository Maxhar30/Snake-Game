import{ update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from "./food.js"
import { outsideTheGrid } from './grid.js'

let lastRenderTime = 0
let gameOver =  false
const gameboard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver) {
        if(confirm('You Lost Press Ok To restart')){
            window.location = './index.html'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return

    
    console.log('Render')
    lastRenderTime = currentTime
    update()
    draw()
    
}
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameboard.innerHTML = ''
    drawSnake(gameboard)
    drawFood(gameboard)
}

function checkDeath(){
    gameOver = outsideTheGrid(getSnakeHead()) || snakeIntersection()
}