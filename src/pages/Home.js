import React, {useState, useEffect} from "react";

const Home = (props) => {

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
        <h1>{boards.board.name}</h1>
        <section>{boards.board.price}</section>
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

 

export default Home;