const CardSmall = (props) => {
const loaded = () => {
  return props.boards.map((boards) => (
    <div className="card-small-card">
      <section className="card-small-card--name">{boards?.board?.name}</section>
      <section className="card-small-card--img"><img src={boards?.board?.bigImg} alt={boards?.board?.name}/></section>
      <section className="card-small-card--price">${boards?.board?.price}</section>
    </div>
  ));

};
const loading = () => {
  return <h1>loading...</h1>
};

return props.boards ? loaded() : loading(); 
};

export default CardSmall;
