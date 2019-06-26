import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Sidebar = () => {
  const [inProp] = useState(true);
  return (
    <CSSTransition in={inProp} appear={true} timeout={10000} classNames="fade">
      <section className="sidebar">
        <div className="inner">
          <div className="clipper">
            <h2>Featured</h2>
          </div>
          <div className="anim-panel">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </p>
            <a href="#" className="read-btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Sidebar;
