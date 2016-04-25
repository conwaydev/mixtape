'use strict';

import React from 'react';
// import PlaylistItemComponent from 'components/PlaylistItemComponent';

require('styles//Playlist.scss');


export class PlaylistComponent extends React.Component {
  render() {
    return (
        <div>
          <h2>Playlist</h2>

          <p>{this.props.playlist}</p>

        </div>
    );
  }
}

export default PlaylistComponent;
