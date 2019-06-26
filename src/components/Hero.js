import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Hero = () => {
  const [inProp] = useState(true);
  return (
    <CSSTransition in={inProp} appear={true} timeout={10000} classNames="fade">
      <section className="hero">
        <div className="inner">
          <div className="clipper">
            <h1>Go Musician</h1>
          </div>

          <div className="anim-panel">
            <p>
              Start touring all over the place and melting the hearts of chicks.
            </p>

            <a href="#" className="read-btn primary">
              Get Famous
            </a>
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Hero;
