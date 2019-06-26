import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Sidebar = () => {
  const [inProp] = useState(true);
  return (
    <CSSTransition in={inProp} appear={true} timeout={10000} classNames="fade">
      <section className="sidebar">
        <div className="inner">
          <div className="clipper">
            <CSSTransition
              in={inProp}
              appear={true}
              timeout={10000}
              classNames="fadeTitle"
            >
              <h2>Featured</h2>
            </CSSTransition>
          </div>
          <CSSTransition
            in={inProp}
            appear={true}
            timeout={10000}
            classNames="anim"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
          </CSSTransition>

          <CSSTransition
            in={inProp}
            appear={true}
            timeout={10000}
            classNames="anim"
          >
            <a href="#" className="read-btn">
              Read More
            </a>
          </CSSTransition>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Sidebar;
