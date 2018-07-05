import React, { Component } from 'react';
import NavBar from '../navbar';

class Layout extends Component {
    render() {
        return(
            <div>
                <NavBar currentpage={this.props.currentpage}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;