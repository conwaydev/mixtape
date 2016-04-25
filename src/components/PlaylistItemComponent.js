'use strict';

import React from 'react';

class PlaylistItemComponent extends React.Component {
    playTheDamnSong() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <button onClick={() => this.playTheDamnSong()}>
                {this.props.trackTitle} - Clicks: {this.state.count}
            </button>
        );
    }
}

PlaylistItemComponent.displayName = 'PlaylistItemComponent';

export default PlaylistItemComponent;
