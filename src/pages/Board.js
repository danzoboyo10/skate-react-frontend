import BoardDisplay from "../components/Board/BoardDisplay"
import BoardCreate from "../components/Board/BoardCreate"
import BoardTitlePrice from "../components/Board/BoardTitlePrice"
import BoardCart from "../components/Board/BoardCart"
import BoardDescription from "../components/Board/BoardDescription"

const Board = () => {
  return (
    <div className="board">
    <div className="board_leftDisplay"> 
      <BoardDisplay />
    </div>
    <div className="board_rightDisplay">
      <BoardCreate />
      <BoardTitlePrice />
      <BoardCart />
      <BoardDescription />
    </div>
    </div>
  )
}

export default Board