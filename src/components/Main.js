require('normalize.css/normalize.css');
require('styles/app.css');

import React from 'react';
import $ from 'jquery';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { playlistArray: [] };
    }

    componentDidMount() {
        $.ajax({
            url: 'https://api.stagebloc.com/v1/account/5111/audio/playlists?client_id=a1f64c449fcccb805232efbe07b4779f&expand=audio&jsonp=?',
            async: false,
            jsonpCallback: 'jsonCallback',
            contentType: "application/json",
            dataType: 'jsonp',
            success: function(data) {
                this.setState({ playlistArray: data.data });
            }.bind(this)
        });
    }

    render() {
        return (
            <ul className="PlaylistList">{this.state.playlistArray.map(function(playlistItem, index) {
                return (
                    <li key={playlistItem.id}>
                        <p><img src={playlistItem.photo.images.small_url} /></p>
                        <h2>{playlistItem.title}</h2>

                        <ol>{playlistItem.audio.map(function(audioTrack) {
                            return <li key={audioTrack.id}><a href={audioTrack.stream_url}>{audioTrack.title}</a></li>;
                        })}</ol>
                    </li>
                );
            })}</ul>
        );
    }
}

export default AppComponent;
