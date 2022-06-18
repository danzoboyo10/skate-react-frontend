import BoardDisplay from "../components/Board/BoardDisplay"
import BoardCreate from "../components/Board/BoardCreate"
import '../Board.scss'

const Board = () => {
  return (
    <div className="board">
    <div className="board-leftDisplay"> 
      <BoardDisplay />
    </div>
    <div className="board-rightDisplay">
      <BoardCreate />
    </div>
    </div>
  )
}

export default Board