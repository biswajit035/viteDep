import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './footer.css'


import numberOfMember from '../../Database/Team/team_members_number.json'
import { useState } from 'react';

const Footer = () => {

    const [didViewCountUp, setDidViewCountUp] = useState(false)
    function onVisibilityChange(isVisible) {
        if (isVisible) {
            setDidViewCountUp({ didViewCountUp: true });
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };


    return (
      <footer>
        <div className="first">
          {numberOfMember.map((item, i) => (
            <div className="first-item" key={i}>
              <span className="f-i-n">
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{
                    top: 10,
                  }}
                  delayedCall
                >
                  <CountUp
                    start={0}
                    end={didViewCountUp ? item.numbers : 0}
                    duration={3}
                  />
                </VisibilitySensor>
              </span>
              <span>Total</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="second">
          <div className="second-item second-info">
            <h1>INFO</h1>
            <ul>
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  About us
                </Link>
              </li>
            </ul>
            {/* <ul>
                        <li><Link to="/galery" onClick={scrollToTop}>Gallery</Link></li>
                    </ul> */}
            <ul>
              <li>
                <Link to="/team" onClick={scrollToTop}>
                  Team
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/contact-us" onClick={scrollToTop}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="second-item second-contact">
            <h1>Contact Us</h1>
            <p>
              <a href="tel:+918210851299"> Aniket Raj: +91-8210851299</a>
            </p>
            <p>
              <a href="tel:+919877082909"> Shivam Kumar: +91-9877082909</a>
            </p>
            <p>
              <a href="tel:+919798555740"> Bidhan Kumar: +91-9798555740</a>
            </p>
            <p>
              {" "}
              <a href="mailto:hithaldia.samarpan@gmail.com">
                hithaldia.samarpan@gmail.com
              </a>
            </p>
          </div>

          <div className="second-item second-social">
            <h1>Reach Us</h1>
            <div className="reach-us">
              {/*
               */}
              <span>
                <a
                  href="https://www.facebook.com/samarpanathith"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f fa-2x" />
                </a>
              </span>
              <span style={{ marginLeft: "25px" }}>
                <a
                  href="https://www.instagram.com/samarpan_hit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-instagram fa-2x"
                    target="_blank"
                  ></i>
                </a>
              </span>
              <span style={{ marginLeft: "25px" }}>
                <a
                  href="https://www.linkedin.com/company/samarpanhit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands fa-linkedin fa-2x"
                    target="_blank"
                  ></i>
                </a>
              </span>
            </div>
            <p className="copyright">Copyright &copy; 2023 by Samarpan</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer
