import $ from 'jquery';
import classNames from 'classnames';
import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Home from './components/home';
import Playlist from './components/playlist';
import PlaylistList from './components/playlist-list';
import Player from './components/player';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playingPlaylist: {},
            playlists: [],
            isLoaded: false,
            isPlaying: false
        };

        this.handlePlayClick = this.handlePlayClick.bind(this);
    }

    componentDidMount() {
        $.ajax({
            url: 'https://api.fullscreendirect.com/v1/account/5111/audio/playlists?expand=created_by,audio&client_id=a1f64c449fcccb805232efbe07b4779f&jsonp=?',
            dataType: 'JSONP'
        }).then(response => {
            this.setState({
                playlists: response.data,
                isLoaded: true
            });
        });
    }

    handlePlayClick(playlistID) {
        this.setState({
            isPlaying: false
        });

        $.ajax({
            url: `https://api.fullscreendirect.com/v1/account/5111/audio/playlists/${playlistID}?expand=audio&client_id=a1f64c449fcccb805232efbe07b4779f&jsonp=?`,
            dataType: 'JSONP'
        }).then(response => {
            this.setState({
                playingPlaylist: response.data,
                isPlaying: true
            });
        });
    }

    renderApplication() {
        if (this.state.isLoaded) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <PlaylistList playlists={this.state.playlists} />
                        </div>

                        <div className="col-md-7 flex-first">
                            <Route exact={true} path={'/'} component={Home} />

                            <Route path='/mix/:mix'
                                   render={({match}) => (
                                       <Playlist
                                           playlist={this.state.playlists.find((playlist) => playlist.id === parseInt(match.params.mix))}
                                           handlePlayClick={this.handlePlayClick}
                                       />
                                   )}
                            />
                        </div>
                    </div>

                    {this.state.isPlaying &&
                        <Player
                            playlist={this.state.playingPlaylist.audio.map(audio => {
                                return {
                                    url: audio.stream_url,
                                    displayText: audio.title
                                }
                            })}
                        />
                    }
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <p>oh I am loading.........</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <Router>
                <div className={classNames('App', {
                    'has-player': this.state.isPlaying
                })}>
                    <Link to="/" className="Logo">
                        <img src={logo} alt="mixtape.website" height="20" />
                    </Link>

                    {this.renderApplication()}
                </div>
            </Router>
        );
    }
}

export default App;
