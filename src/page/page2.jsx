import React, { Component}  from 'react';
import Layout from '../component/layout';
import Blog from '../component/blog';

class Page2 extends Component {
    
    render() {
        
        return (
            <Layout currentpage={this.props.match.url}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>TEST</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Blog />
                        </div>
                    </div>
                </div>
            </Layout>
        );

    }

}

export default Page2;