import BoardDisplay from "../components/Board/BoardDisplay"
import BoardCreate from "../components/Board/BoardCreate"
import '../Board.scss'
import { useState } from "react"

const Board = (props) => {

  const [ skateBoards, setSkateBoards ] = useState(null); 

  const getBoards = async () => {
    const response = await fetch(props.URL + 'all');
    const data = await response.json();
    setSkateBoards(data);
  };
  

  const createBoards = async (board) => {
    await fetch(props.URL + 'create', {
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
    <div className="board-leftDisplay"> 
      <BoardDisplay />
    </div>
    <div className="board-rightDisplay">
      <BoardCreate createBoard={createBoards} board={skateBoards} />
    </div>
    </div>
  )
}

export default Board