import React, { Component}  from 'react';
import Layout from '../component/layout';
import Slideshow from '../component/slideshow';

class Page2 extends Component {
    
    render() {
        
        return (
            <Layout currentpage={this.props.match.url}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Event & News</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Slideshow />
                        </div>
                    </div>
                </div>
            </Layout>
        );

    }

}

export default Page2;