import BoardDisplay from "../components/Board/BoardDisplay"
import BoardCreate from "../components/Board/BoardCreate"
import '../Board.scss'
import { useState } from "react"

const Board = (props) => {

  const [ skateBoards, setSkateBoards ] = useState(null); 
  
  const createBoards = async (board) => {
    await fetch(props.URL + 'create', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(board),
    });
  }; 

  return (
    <div className="board">
    <div className="board-left-display"> 
      <BoardDisplay />
    </div>
    <div className="board-right-display">
      <BoardCreate createBoard={createBoards} />
    </div>
    </div>
  )
}

export default Board