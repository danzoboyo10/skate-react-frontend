import BoardTitlePrice from "./BoardTitlePrice"
import BoardCart from "./BoardCart"
import BoardDescription from "./BoardDescription"
import BoardWidth from "./BoardWidth"
import BoardIframe from "./BoardIframe"
import { useState } from "react"

const BoardCreate = (props) => {
  const [newForm, setNewForm ] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.targent.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBoard(newForm);
  }

  const loaded = () => {
    return (
      <div className="board-create">
        <BoardTitlePrice />
        <BoardWidth />
        <BoardIframe />
        <BoardCart />
        <BoardDescription />
      </div>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }
  
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          value={newForm.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
        <input type="submit" value="Create Skateboard" />
      </form>
      {props.board ? loaded() : loading()};
    </section>
  )
};

export default BoardCreate
