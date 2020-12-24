const GRID_SIZE = 50

export function randomGridPostion(){
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1 
    }

}

export function outsideTheGrid(positon){
    return (
        positon.x < 1 || positon.x > GRID_SIZE || positon.y < 1 || positon.y > GRID_SIZE
    )
}