import React, { Component } from 'react';
import AudioPlayer from './react-responsive-audio-player/src';

class Player extends Component {
    render() {
        return (
            <div className="Playlist__player" ref={player => player && player.focus()}>
                <AudioPlayer
                    playlist={this.props.playlist}
                    autoplay={true}
                />
            </div>
        );
    }
}

export default Player;
