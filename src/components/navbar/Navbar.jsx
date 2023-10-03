/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import image1 from '../../assets/logo.png'
import Alert from './Alert'
import './navbar.css'

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let location = useLocation();
  const toogle = useRef(null)
  function handleClick() {
    toogle.current.click()
  }
  useEffect(() => {
  }, [location])
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <>
      {/* <Alert /> */}
      <section id="title">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={image1} alt="samarpanLogo" />
          </Link>
          {/* <span> */}

          {/* donate button */}
          {windowWidth <= 768 && location.pathname !== "/donate" && (
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="a-c">DONATE</button>
            </Link>
          )}

          {/* TOOGLER */}
          <button
            id="hambarger"
            ref={toogle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#samarpanTitle"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="samarpanTitle">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleClick}>
                  HOME{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleClick}>
                  ABOUT US{" "}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to='/galery' onClick={handleClick}>GALLERY </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/team" onClick={handleClick}>
                  TEAM{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alumni" onClick={handleClick}>
                  ALUMNI
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={handleClick}
                >
                  CONTACT US{" "}
                </Link>
              </li>
            </ul>
          </div>
          {/* </span> */}

          {/* donate button */}
          {windowWidth > 768 && location.pathname !== "/donate" && (
            <Link to="/donate" style={{ textDecoration: "none" }}>
              <button className="b-c">DONATE</button>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}

export default Navbar
