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
              <CSSTransition
                in={inProp}
                appear={true}
                timeout={10000}
                classNames="fadeTitle"
              >
                <h2>Subscribe</h2>
              </CSSTransition>
            </div>
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={10000}
              classNames="anim"
            >
              <p>Get the latest updates about this website and stuff.</p>
            </CSSTransition>
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={10000}
              classNames="anim"
            >
              <input placeholder="Email Address" type="text" name="email" />
            </CSSTransition>
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={10000}
              classNames="anim"
            >
              <button className="cta">Subscribe Now</button>
            </CSSTransition>
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Subscribe;
