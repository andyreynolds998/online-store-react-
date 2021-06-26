import React, { Component } from 'react'; //imrc
import "./navbar.css";


//cc
class NavBar extends Component {
    state = {};

    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Yeehaw</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Catalog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
 
export default NavBar;