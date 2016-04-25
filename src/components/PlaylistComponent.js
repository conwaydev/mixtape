'use strict';

import React from 'react';
import AudioTrackComponent from 'components/AudioTrackComponent';

export class PlaylistComponent extends React.Component {


    render() {
        return (
            <div className="col-md-4 col-sm-6 m-t-1">
                <div className="card">
                    <img className="card-img-top img-fluid" src={this.props.image} />

                    <div className="card-block">
                        <h2>
                            <a href="/">
                                {this.props.title}
                            </a>
                        </h2>

                        <p>By {this.props.author}</p>
                    </div>

                    <ul className="list-group list-group-flush">{this.props.tracks.map(function(audioTrack) {
                        return (
                            <AudioTrackComponent
                                key={audioTrack.id}
                                title={audioTrack.title}
                                streamUrl={audioTrack.stream_url} />
                        );
                    })}</ul>
                </div>
            </div>
        );
    }
}

export default PlaylistComponent;
