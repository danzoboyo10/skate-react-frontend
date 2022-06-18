import BoardSmallB from "./BoardSmallB"
import BoardSmallF from "./BoardSmallF"
import BoardMain from "./BoardMain"

const BoardDisplay = () => {
  return (
    <div className="board-boardDisplay">
      <div className="board-boardDisplay--smallContainer">
        <BoardSmallF />
        <BoardSmallB />
      </div>
      <div className="board-boardDisplay--main">
        <BoardMain />
      </div>
    </div>
  )
}

export default BoardDisplay