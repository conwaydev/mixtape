import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

class PlaylistButton extends Component {
	render() {
		return (
			<div className="col-6 col-md-4">
				<Link className="Playlist__cover"
					  to={`/mix/${this.props.id}`}
					  onClick={()=> window.scrollTo(0, 0)}
					  title={this.props.name}
				>
					<LazyLoad height={200}>
						<img src={this.props.image}
							 alt={this.props.name}
							 className="img-fluid"
						/>
					</LazyLoad>
				</Link>
			</div>
		);
	}
}

export default PlaylistButton;
