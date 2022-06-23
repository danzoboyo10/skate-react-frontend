import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PremadeShow.scss'

const PremadeShow = (props) => {

  useEffect(() => { props.getBoards(); }, []);
  const history = useNavigate();

  const { id } = useParams();
  const premade = props?.boards?.find((board) => board._id === id);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBoards({
      premade: premade._id,
      quantity: 20
    });
    history('/cart');
  }

  const loaded = () => {
    return (
      <div className="premade-show">
        <div className="premade-show--images">
          <section className="premade-show--thumbs">
            <section className="premade-show--thumbs-front">
              Board Front
            </section>
            <section className="premade-show--thumbs-back">
              Board Back
            </section>
          </section>
          <section className="premade-show--large-img">
            <img src={premade.boardId.bigImg} />
          </section>
        </div>
        <div className="premade-show--list">
          <div className="premade-show--list-wrapper">
            <section className="premade-show--name">
              {premade.name}
            </section>
            <section className="premade-show--board">
              <section>
                {premade.boardId.name}
              </section>
              <section className="premade-show--right">
                $ {premade.boardId.price}
              </section>
            </section>
            <section className="premade-show--bearing">
              {premade.bearingId.name}
              $ {premade.bearingId.price}
            </section>
            <section className="premade-show--truck">
              {premade.truckId.name}
              $ {premade.truckId.price}
            </section>
            <section className="premade-show--wheel">
              {premade.wheelId.name}
              $ {premade.wheelId.price}
            </section>
            <section className="premade-show--add-to-cart">
              <form onSubmit={handleSubmit}>
                <input type="submit" value="Add to cart" />
              </form>
            </section>
          </div>
        </div>
        <div className="min-height"></div>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.boards ? loaded() : loading();
}

export default PremadeShow