import BoardAccessories from "./BoardAccessories"

const BoardIframe = () => {
  return (
    <div className="board-create--iframe">
      <BoardAccessories />
      <iframe></iframe>
    </div>
  )
}

export default BoardIframe