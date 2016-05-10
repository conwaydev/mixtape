'use strict';

import React from 'react';

export class PlaylistComponent extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <div className="card m-t-1">
                    <img className="card-img-top img-fluid" src={this.props.image} />

                    <div className="card-block">
                        <h2>
                            <a>
                                {this.props.title}
                            </a>
                        </h2>

                        <p>By {this.props.author}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistComponent;
