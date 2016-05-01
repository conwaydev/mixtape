'use strict';

import React from 'react';

const logoStyles = {
  display: 'block',
  width: '240px',
  height: 'auto'
};

class NavigationComponent extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-full navbar-dark bg-inverse">
          <a class="navbar-brand" href="/">
            <img style={logoStyles} src="images/logo.svg" />
          </a>
        </nav>
    );
  }
}

NavigationComponent.displayName = 'NavigationComponent';

export default NavigationComponent;
