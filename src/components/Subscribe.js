import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Subscribe = () => {
  const [inProp] = useState(true);
  return (
    <CSSTransition in={inProp} appear={true} timeout={10000} classNames="fade">
      <section>
        <div className="subscribe">
          <div className="inner">
            <div className="clipper">
              <h2>Subscribe</h2>
            </div>
            <div className="anim-panel">
              <p>Get the latest updates about this website and stuff.</p>
              <input placeholder="Email Address" type="text" name="email" />
              <button className="cta">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Subscribe;
