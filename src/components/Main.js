require('normalize.css/normalize.css');
require('bootstrap/scss/bootstrap.scss');

import React from 'react';
import $ from 'jquery';
import PlaylistComponent from 'components/PlaylistComponent';

const logoStyles = {
    display: 'block',
    width: '240px',
    height: 'auto'
};

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistArray: []
        };
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
            <div>
                <nav className="navbar navbar-full navbar-dark bg-inverse">
                    <a class="navbar-brand" href="#">
                        <img style={logoStyles} src="images/logo.svg" />
                    </a>
                </nav>

                <div className="container-fluid m-t-2">
                    <div className="row">
                        {this.state.playlistArray.map(function(playlistItem) {
                            return (
                                <PlaylistComponent
                                    key={playlistItem.id}
                                    author={playlistItem.created_by}
                                    title={playlistItem.title}
                                    image={playlistItem.photo.images.medium_url}
                                    tracks={playlistItem.audio} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;
