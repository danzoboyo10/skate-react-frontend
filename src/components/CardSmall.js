const CardSmall = (props) => {
const loaded = () => {
  return props.boards.map((boards) => (
    <div className="cardSmall_card">
      {console.log(boards)}
      {console.log(boards?.board?.name)} 
      <section className="cardSmall_card--name">{boards?.board?.name}</section>
      <section className="cardSmall_card--img"><img src={boards?.board?.bigImg} alt={boards?.board?.name}/></section>
      <section className="cardSmall card--price">{boards?.board?.price}</section>
    </div>
  ));

};
const loading = () => {
  return <h1>loading...</h1>
};

return props.boards ? loaded() : loading(); 
};

export default CardSmall;
