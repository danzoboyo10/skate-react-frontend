import BoardTitlePrice from "./BoardTitlePrice"
import BoardCart from "./BoardCart"
import BoardDescription from "./BoardDescription"
import BoardWidth from "./BoardWidth"
import BoardIframe from "./BoardIframe"

const BoardCreate = () => {
  return (
    <div className="board-create">
      <BoardTitlePrice />
      <BoardWidth />
      <BoardIframe />
      <BoardCart />
      <BoardDescription />
    </div>
  )
}

export default BoardCreate