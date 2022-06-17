const CardSmall = (props) => {

    return props.boards.map((boards) => (
      <div className="cardSmall_card">
        <section className="cardSmall_card--name">{boards.board.name}</section>
        <section className="cardSmall_card--img"><img src={boards.board.image} alt={boards.board.name}/></section>
        <section className="cardSmall card--price">{boards.board.price}</section>
      </div>
    ))
};

export default CardSmall
