/* eslint-disable no-unused-vars */
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from '../ErrorBoundary';
import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom'
import './home.css'

// import Vision from './Vision/Vision'
const Galery = lazy(() => import("./galery/Galery"));
const ImageSlider = lazy(() => import("./ImageSlider"));
const Ourevents = lazy(() => import("./OurEvents/Ourevents"));

const Home = () => {
    return (
      <div>
        <ErrorBoundary
          FallbackComponent={FallbackRender}
          onReset={(details) => {
            // Reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<div>Loading....</div>}>
            <ImageSlider />

            <div className="banner_top">
              <span className="b-t-h">SAMARPAN</span>
              <span className="b-t-c">EK SOCH, EK VISWAS</span>
              <Link
                to="/about"
                className="vision_btn_banner"
                style={{ textDecoration: "none" }}
              >
                About Us
              </Link>
            </div>

            <div className="social-msg">
              <h1>ALL CHILDREN DESERVE AN OPPORTUNITY TO SUCCEED IN LIFE</h1>
              <p className="test">
                An NGO of Haldia Institute of Technology. Marching forward with
                the thirst of providing free primary education to the needy
                children of nearby areas.
              </p>
            </div>

            <Galery />

            {/* <Vision bgcolor="white" /> */}

            <Ourevents />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
}

export default Home