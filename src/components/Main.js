require('normalize.css/normalize.css');
require('bootstrap/scss/bootstrap.scss');

import React from 'react';
import axios from 'axios';

import NavigationComponent from 'components/NavigationComponent';
import PlaylistComponent from 'components/PlaylistComponent';



const playlistApiUrl = 'https://api.stagebloc.com/v1/account/5111/audio/playlists?client_id=a1f64c449fcccb805232efbe07b4779f';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlistArray: []
        };

        this.loadPlaylists = this.loadPlaylists.bind(this);
    }

    componentDidMount() {
        this.loadPlaylists();
    }

    // loadPlaylists makes an inital ajax request then sets our playlistArray state

    loadPlaylists() {
        axios
            .get(playlistApiUrl).then((response) => {
                this.setState({ playlistArray: response.data.data })
            });
    }

    // getPlaylistAuthor is a look up of the playlists created_by ID and returns the name of the author of the playlist

    getPlaylistAuthor(id) {
        axios
            .get('https://api.stagebloc.com/v1/users/' + id + '/?client_id=a1f64c449fcccb805232efbe07b4779f').then((response) => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <div>
                <NavigationComponent />

                <div className="container-fluid m-t-2">
                    <div className="row">
                        {this.state.playlistArray.map(function(playlistItem, i) {
                            return (
                                <PlaylistComponent
                                    key={playlistItem.id}
                                    author={playlistItem.created_by}
                                    title={playlistItem.title}
                                    image={playlistItem.photo.images.medium_url}
                                    ref={'playlistItem' + i} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;
