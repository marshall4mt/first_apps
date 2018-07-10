import React, { Component } from 'react';
import Maincontent from '../component/maincontent';
// import Blog from '../component/blog';
import Layout from '../component/layout';
import '../App.css';
import SetMetatags from '../metatag';

class App extends Component {
  render() {
    return (
      <Layout currentpage={this.props.match.url} >
        <SetMetatags />
        <Maincontent />
      </Layout>
    );
  }
}

export default App;
