import React, { Component}  from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React+Bst4</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className={`nav-item ${(this.props.currentpage === "/")?'active':''}`}>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className={`nav-item ${(this.props.currentpage === "/page2")?'active':''}`}>
                            <Link to="/page2" className="nav-link">page2</Link>
                        </li>
                    </ul>
                </div>
             </nav>
             
        );
    }
}

export default NavBar;