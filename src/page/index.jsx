import React, { Component } from 'react';
import Maincontent from '../component/maincontent';
// import Blog from '../component/blog';
import Layout from '../component/layout';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Layout currentpage={this.props.match.url} >
        <Maincontent />
      </Layout>
    );
  }
}

export default App;
