import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';


class SetMetatags extends Component {
    
    render() {

        return (
            <MetaTags>
                <title>TEST TITLE</title>
                <meta name="description"  content="TEST TEST" />
                <meta property="og:title" content="TEST TEST" />
                <meta property="og:image" content="https://www.moneytable.com/static/media/moneytable@3x.00f0c84f.png" />
                <meta property="og:type"  content="website" />
                <meta property="og:url"   content={window.location.href} />
                <meta property="og:description" content="TEST TEST" />
            </MetaTags>
        );
    }

}

export default SetMetatags;