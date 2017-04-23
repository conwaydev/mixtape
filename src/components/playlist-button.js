import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlaylistButton extends Component {
	render() {
		return (
			<div className="col-6 col-md-4">
				<Link className="Playlist__cover"
					  to={`/mix/${this.props.id}`}
					  onClick={()=> window.scrollTo(0, 0)}
				>
					<img src={this.props.image}
						 alt={this.props.name}
						 className="img-fluid"
					/>
				</Link>
			</div>
		);
	}
}

export default PlaylistButton;
