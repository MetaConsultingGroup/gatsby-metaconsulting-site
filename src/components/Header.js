import PropTypes from 'prop-types'
import React from 'react'
import image04 from '../images/image04.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span><img src={image04} alt="" width="100%" height="100%" /></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>A MANAGEMENT CONSULTANCY.</h1>
        <p>
          We help enterprises become more agile, specialising in transformation 
          <br />
          and optimisation of the processes within the PMO and adjacent spaces.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Book A Call
          </button>
        </li>
        
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
