import React from 'react';

// es6 syntax sugar, pass video property that exists in props
// without need to declare a new video const with the value of props.video
const VideoListItem = ({ video }) => {
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" />
				</div>
			</div>
			<div className="media-body">
				<div className="media-heading">
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;