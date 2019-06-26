import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Hero = () => {
  const [inProp] = useState(true);
  return (
    <CSSTransition in={inProp} appear={true} timeout={10000} classNames="fade">
      <section className="hero">
        <div className="inner">
          <div className="clipper">
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={10000}
              classNames="fadeTitle"
            >
              <h1>Go Musician</h1>
            </CSSTransition>
          </div>

          <CSSTransition
            in={inProp}
            appear={true}
            timeout={10000}
            classNames="anim"
          >
            <p>
              Start touring all over the place and melting the hearts of chicks.
            </p>
          </CSSTransition>
          <CSSTransition
            in={inProp}
            appear={true}
            timeout={10000}
            classNames="anim"
          >
            <a href="#" className="read-btn primary">
              Get Famous
            </a>
          </CSSTransition>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Hero;
