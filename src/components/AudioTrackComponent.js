'use strict';

import React from 'react';

const buttonStyle = {
    display: 'block',
    textAlign: 'left',
    whiteSpace: 'normal'
};

class AudioTrackComponent extends React.Component {
    playTheTrack(name, url) {
        console.log('Now streaming "' + name + '" with the url of ' + url);
    }

    render() {
        return (
            <li className="list-group-item">
                <button className="btn btn-link"
                        style={buttonStyle}
                        onClick={() => this.playTheTrack(this.props.title, this.props.streamUrl)}>
                    {this.props.title}
                </button>
            </li>
        );
    }
}

AudioTrackComponent.displayName = 'AudioTrackComponent';

export default AudioTrackComponent;
