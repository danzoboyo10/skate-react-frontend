import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="banner">
      <section className="banner_text">
        <Link to="/skateboards">
          <section className="banner_text--effect">
            Customize your board
          </section>
        </Link>
      </section>
    </div>
  )
}

export default Banner