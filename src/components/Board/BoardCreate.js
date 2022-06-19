import BoardTitlePrice from './BoardTitlePrice'
import BoardCart from './BoardCart'
import BoardDescription from './BoardDescription'
import BoardWidth from './BoardWidth'
import BoardIframe from './BoardIframe'
import { useState } from 'react'

const BoardCreate = (props) => {
  const [ newForm, setNewForm ] = useState({
    name: '',
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBoard(newForm);
  }

  const loaded = () => {
    return (
      <div className="board-create">
        <form onSubmit={handleSubmit}>
          <input
            value={newForm.name}
            onChange={handleChange}
            name="name"
            placeholder="Name your board"
            type="text"
          />
          <input type="submit" value="Create board" />
        </form>
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
    newForm ? loaded() : loading()
  )
};

export default BoardCreate
