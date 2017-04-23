import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h4 style={{marginTop: '20px'}}>Welcome to mixtape.website</h4>
                <p>mixtape.website is a web project that seeks to bring community to the digital mixtape world. Powered by <a href="//stagebloc.com">Fullscreen Direct</a>, mixtape.website aims to allow for content creators as well as listeners to create entralling web experiences.</p>

                <p>To get started please select a playlist...</p>

                <p>If you have questions or concerns (like you want to sue me for your music on this app) go ahead and send an email to
                    <a href="mailto:justin@conwaydev.com">justin@conwaydev.com</a> and I'd be happy to help!</p>
            </div>
        );
    }
}

export default Home;
