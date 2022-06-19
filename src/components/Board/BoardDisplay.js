import BoardSmallB from "./BoardSmallB"
import BoardSmallF from "./BoardSmallF"
import BoardMain from "./BoardMain"

const BoardDisplay = () => {
  return (
    <div className="board-display">
      <div className="board-display--small-container">
        <BoardSmallF />
        <BoardSmallB />
      </div>
      <div className="board-display--main">
        <BoardMain />
      </div>
    </div>
  )
}

export default BoardDisplay