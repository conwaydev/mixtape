'use strict';

import React from 'react';

require('styles//Player.scss');

class PlayerComponent extends React.Component {
  render() {
    return (
        <aside className="Player navbar navbar-fixed-bottom navbar-light bg-faded">
          <div className="row">
            <div className="col-xs-4">
              <button className="btn btn-link">
                <svg>
                  <use xlinkHref='/images/sprite.svg#icon-first' />
                </svg>
              </button>

              <button className="btn btn-link">
                <svg>
                  <use xlinkHref='/images/sprite.svg#icon-play' />
                </svg>
              </button>

              <button className="btn btn-link">
                <svg>
                  <use xlinkHref='/images/sprite.svg#icon-last' />
                </svg>
              </button>
            </div>

            <div className="col-xs-6">

              <p className="Player--title"><strong>03. Song title with a really long title and this is awesome</strong></p>
              <p><a href="/">Artist name</a></p>

            </div>

            <div className="col-xs-2 _right">
              <button className="btn btn-link">
                <svg>
                  <use xlinkHref='/images/sprite.svg#icon-dots-three-horizontal' />
                </svg>
              </button>
            </div>
          </div>
        </aside>
    );
  }
}

PlayerComponent.displayName = 'PlayerComponent';

export default PlayerComponent;
