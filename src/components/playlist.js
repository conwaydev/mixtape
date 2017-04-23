import React, { Component } from 'react';

class Playlist extends Component {
    printDescription(description) {
        return { __html: description };
    }

    render() {
        return (
            <div className="Playlist__information">
                <div className="row" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                    <div className="col-xs-12 col-sm-6 col-lg-5">
                        <div className="Playlist__cover">
                            <img src={this.props.playlist.photo.images.medium_url}
                                 alt={this.props.playlist.title}
                                 className="img-fluid"
                                 style={{ width: '100%' }}
                            />
                        </div>

                        <div className="Playlist__actions">
                            <p className="Playlist__actions-creator">
                                Created by

                                <a href={this.props.playlist.created_by.url}>
                                    <img src={this.props.playlist.created_by.photo.images.thumbnail_url}
                                         alt={this.props.playlist.created_by.name}
                                         height="30"
                                    />

                                    {this.props.playlist.created_by.name}
                                </a>
                            </p>

                            <button className="button button--block button--blue"
                                    ref={button => button && button.focus()}
                                    onClick={()=> this.props.handlePlayClick(this.props.playlist.id)}
                            >
                                Play this playlist
                            </button>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-lg-7">
                        <div className="Playlist__description">
                            <h2>{this.props.playlist.title}</h2>

                            {this.props.playlist.description &&
                                <div className="Playlist__actions" dangerouslySetInnerHTML={this.printDescription(this.props.playlist.description)}/>
                            }

                            {this.props.playlist.audio &&
                                <ol>
                                    {this.props.playlist.audio.map(track => <li key={track.id}>{track.title}</li>)}
                                </ol>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Playlist;
