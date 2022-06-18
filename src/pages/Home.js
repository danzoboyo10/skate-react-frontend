import React, {useState, useEffect} from "react";
import CardSmall from "../components/CardSmall";
import Banner from "../components/Banner";
import HomeLogos from "../components/HomeLogos";

const Home = (props) => {

  const [ skateBoards, setSkateBoards ] = useState(null);

  const getSkateBoardsData = async () => {
  const response = await fetch(props.URL + 'presets');
  const data = await response.json();
    setSkateBoards(data);
  };

  useEffect(() => { getSkateBoardsData() }, []);

  const loaded = () => {
    return (
      <>
        <HomeLogos />
        <Banner />
        <div className="cardSmall_wrapper">
          <div className="cardSmall">
            <CardSmall boards={skateBoards} />
          </div>
        </div>
      </>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
    skateBoards ? loaded() : loading()
  );
};

 

export default Home;