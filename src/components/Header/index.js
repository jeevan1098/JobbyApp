// Import necessary modules
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

// Header component
const Header = props => {
  // Function to handle logout
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  // Return JSX for header
  return (
    <nav className="nav-header">
      <div className="nav-content">
        {/* Mobile navigation */}
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>

          <ul className="nav-bar-mobile-icons-container">
            {/* Home */}
            <li>
              <Link to="/" aria-label="Home">
                <AiFillHome className="nav-item-mobile-link" />
              </Link>
            </li>
            {/* Jobs */}
            <li>
              <Link to="/jobs" aria-label="Jobs">
                <BsFillBriefcaseFill className="nav-item-mobile-link" />
              </Link>
            </li>
            {/* Logout */}
            <li>
              <button
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
                aria-label="Logout"
              >
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>

        {/* Large screen navigation */}
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            {/* Home */}
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* Jobs */}
            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          {/* Logout */}
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

// Export Header component with withRouter HOC
export default withRouter(Header)
