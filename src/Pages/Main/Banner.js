import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner">
      <section className="banner-text">
        <Link to="/skateboards">
          <section className="banner-text--effect">
            Customize your board
          </section>
        </Link>
      </section>
    </div>
  )
}

export default Banner