require('normalize.css/normalize.css');
require('bootstrap/scss/bootstrap.scss');
require('styles/App.css');

import React from 'react';
import axios from 'axios';

import NavigationComponent from 'components/NavigationComponent';
import PlaylistComponent from 'components/PlaylistComponent';
import PlayerComponent from 'components/PlayerComponent';

const sbClientID = 'a1f64c449fcccb805232efbe07b4779f';
const playlistApiUrl = 'https://api.stagebloc.com/v1/account/5111/audio/playlists?client_id=' + sbClientID;

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { playlistArray: [], currentPlaylist: [] };

        this.loadPlaylists = this.loadPlaylists.bind(this);
    }

    componentDidMount() {
        this.loadPlaylists();
    }

    // loadPlaylists makes an initial ajax request then sets our playlistArray state

    loadPlaylists() {
        axios.get(playlistApiUrl).then((response) => {
            console.log(response.data.data);
            this.setState({ playlistArray: response.data.data })
        });
    }

    // getPlaylistAuthor is a look up of the playlists created_by ID and returns the name of the author of the playlist

    loadPlaylistAuthor(authorId) {
        axios.get('https://api.stagebloc.com/v1/users/' + authorId + '/?client_id=' + sbClientID).then((response) => {
            return response.data.data.name;
        });
    }

    loadPlaylistTracks(playlistId) {
        axios.get('https://api.stagebloc.com/v1/account/5111/audio/playlist/' + playlistId + '/?client_id=' + sbClientID + '&expand=audio').then((response) => {
            response.data.data.audio.map((track) => {
                return track.title;
            });
        });
    }

    render() {
        return (
            <div>
                <NavigationComponent />

                <div className="container m-t-2">
                    <div className="row">
                        {this.state.playlistArray.map((playlistItem, i) => {
                            return (
                                <PlaylistComponent
                                    key={i}
                                    author={this.loadPlaylistAuthor(playlistItem.created_by)}
                                    title={playlistItem.title}
                                    image={playlistItem.photo.images.medium_url}
                                    clickEvent={playlistItem.id}
                                    tracks={this.loadPlaylistTracks(playlistItem.id)} />
                            );
                        })}
                    </div>
                </div>

                <PlayerComponent
                    playlist={this.state.currentPlaylist} />
            </div>
        );
    }
}

export default AppComponent;
