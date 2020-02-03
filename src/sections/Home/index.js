import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return <header className='masthead bg-primary text-white text-center'>
    <div className='container d-flex align-items-center flex-column'>

      {/* <!-- Masthead Avatar Image --> */}
      <img className='masthead-avatar mb-5' src='images/avataaars.svg' alt='' />

      {/* <!-- Masthead Heading --> */}
      <h1 className='masthead-heading text-uppercase mb-0'>Start Bootstrap</h1>

      {/* <!-- Icon Divider --> */}
      <div className='divider-custom divider-light'>
        <div className='divider-custom-line' />
        <div className='divider-custom-icon'>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className='divider-custom-line' />
      </div>

      {/* <!-- Masthead Subheading --> */}
      <p className='masthead-subheading font-weight-light mb-0'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  </header>
}

export default Home
