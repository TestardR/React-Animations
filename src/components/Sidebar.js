import React from 'react';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="inner">
        <div className="clipper">
          <h2>Featured</h2>
        </div>
        <div className="anim-panel">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
          <a href="#" className="read-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
