import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Us</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>First Order Thinking </h3>
          <p>
            We understand the true nature of the problems you are facing. More and more projects being onboarded than you can handle
            and being ill equipped to be able to map these out and keep governance and efficiency in line. 
            We help you put out these fires, and make you feel in control instead of keeping your head barely above water.
          </p>
          <h3>An Internal PMO</h3>
          <p>
            With an internal PMO we provide a team that implements enterprise level entities with the ability to succeed and reliably achieve
            results across the organization’s entire project portfolio. Thus, making project management a true asset and even a competitive advantage of the company’s operations.
          </p>
          <h3>PMO role</h3>
          <p>
            Providing an enterprise level project management related guidance and services and serving as a project management best practices repository and center of excellence
          </p>
          <p>
            How does it help? 
            It controls rising costs associated with projects and resourcing,
            it streamlines and simplifies processes, it increases the alignment between projects and business initiatives, it maximize use of resources and personnel, it provides better leverage past project experiences into new and upcoming projects
            and finally it can provide a “health check” to keep projects on track.
          </p>
          <br/>
          <a href="https://calendly.com/metaconsulting/30min"><button>Book Us</button></a>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Consultancy</h3>
          <p>
            We offer to come in, analyze and report, then finally give you advice and material to implement.
          </p>
          <h3>Internal Project Manager</h3>
          <p>
            We can work with your people on selected projects and show them how to deliver.
          </p>
          <h3>Internal Project Management Office</h3>
          <p>
            We will not only oversee all the projects but will also implement and establish practices and projects that will allow for long lasting change and efficiency.
          </p>
          <br/>
          <a href="https://calendly.com/metaconsulting/30min"><button>Book Us</button></a>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Book Us</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Let's talk!
          </p>
          <p>
            You can easily book a free consultation with us using the Calendly button down below.
          </p>
          <p>
            For other questions and queries you can contact us at:
          </p>
          <p>
            <a href="mailto:info@metaconsulting.group">info@metaconsulting.group</a>
          </p>
          <a href="https://calendly.com/metaconsulting/30min"><button>Calendly Appointment</button></a>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="POST" action="webform.php">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
