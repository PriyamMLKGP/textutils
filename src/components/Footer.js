import React from 'react';

export default function Footer(props) {
  return <div>
      <nav className={`navbar sticky-bottom navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
        </div>
</nav>
  </div>;
}
