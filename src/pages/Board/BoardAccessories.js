import BoardBearings from "./BoardBearings"
import BoardTrucks from "./BoardTrucks"
import BoardWheels from "./BoardWheels"
import BoardIframe from "./BoardIframe"

const BoardAccessories = () => {
  return (
    <div className="board-create--accessories">
      <BoardWheels />
      <BoardTrucks />
      <BoardBearings />
    </div>
  )
}

export default BoardAccessories