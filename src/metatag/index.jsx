import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';


class SetMetatags extends Component {
    
    render() {

        return (
            <MetaTags>
                <title>First React Application</title>
                <meta name="description"  content="เว็บไซต์ทดสอบของกระผม > Me" />
                <meta property="og:title" content="First React Application" />
                <meta property="og:image" content="http://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png" />
                <meta property="og:image:width" content="200"/>
                <meta property="og:image:height" content="200"/>
                <meta property="og:type"  content="website" />
                <meta property="og:url"   content={window.location.href} />
                <meta property="og:description" content="เว็บไซต์ทดสอบของกระผม > Me" />
            </MetaTags>
        );
    }

}

export default SetMetatags;