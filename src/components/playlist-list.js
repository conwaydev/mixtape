import React, { Component } from 'react';
import PlaylistButton from './playlist-button';

class PlaylistList extends Component {
    render() {
        return (
            <div className="Playlist__list">
                <div className="row">
                    {this.props.playlists.map((playlist, i) => {
                        return (
                            <PlaylistButton
                                key={i}
                                id={playlist.id}
                                image={playlist.photo.images.medium_url}
                                name={playlist.title}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PlaylistList;
