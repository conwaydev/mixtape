import React, { Component } from 'react';
import AudioPlayer from './react-responsive-audio-player';

class Player extends Component {
    render() {
        return (
            <div className="Playlist__player">
                <AudioPlayer
                    playlist={this.props.playlist}
                    autoplay={true}
                />
            </div>
        );
    }
}

export default Player;
