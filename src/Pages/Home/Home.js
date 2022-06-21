import React, {useState, useEffect} from "react";
import CardSmall from "./CardSmall";
import Banner from "./Banner";
import HomeLogos from "./HomeLogos";

const Home = (props) => {

  const [ premadeBoards, setPremadeBoards ] = useState(null);
  
  const getPremadeBoardsData = async () => {
    // if(!props.user) return;
  const response = await fetch(props.URL + 'all');
  const data = await response.json();
    setPremadeBoards(data);
  };

  useEffect(() => { getPremadeBoardsData() }, []);

  const loaded = () => {
    return (
      <>
        <HomeLogos />
        <Banner />
        <div className="card-small">
          <CardSmall boards={premadeBoards} />
          <div className="card-small--empty"></div>
          <div className="card-small--empty"></div>
          <div className="card-small--empty"></div>
        </div>
      </>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    premadeBoards ? loaded() : loading()
  );
};

export default Home;