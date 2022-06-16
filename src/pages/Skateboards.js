import { useState, useEffect } from 'react'

const Skateboards = (props) => {

  const [ skateBoards, setSkateBoards ] = useState(null);
  const getSkateBoardsData = async () => {
    const response = await fetch(props.URL + 'finishedboards');
    const data = await response.json();
    setSkateBoards(data);
  };

  useEffect(() => { getSkateBoardsData() }, []);

  const loaded = () => {
    return skateBoards.map((boards) => (
      <>
        <h1>{boards.name}</h1>
        <section>{boards.price}</section>
      </>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    skateBoards ? loaded() : loading()
  );
};

export default Skateboards;