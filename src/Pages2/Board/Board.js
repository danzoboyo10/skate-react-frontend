import BoardDisplay from "./BoardDisplay"
import BoardCreate from "./BoardCreate"
import './Board.scss'
import { useState } from "react"

const Board = (props) => {

  const [ skateBoards, setSkateBoards ] = useState(null); 

  const getBoards = async (board) => {
    const response = await fetch(props.URL + 'create');
    const data = await response.json();
    setSkateBoards(data);
  }
  
  const createBoards = async (board) => {
    await fetch(props.URL + 'custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(board),
    });
    getBoards();
  }; 

  return (
    <div className="board">
      <div className="board-left-display"> 
        <BoardDisplay />
      </div>
      <div className="board-right-display">
        <BoardCreate createBoard={createBoards} />
      </div>
      <div className="min-height"></div>
    </div>
  )
}

export default Board