import React, {useState, useEffect} from "react";
import CardSmall from "../components/CardSmall";
import Banner from "../components/Banner";
import HomeLogos from "../components/HomeLogos";

const Home = (props) => {

  const [ premadeBoards, setPremadeBoards ] = useState(null);
  
  const getPremadeBoardsData = async () => {
  const response = await fetch(props.URL + 'presets');
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