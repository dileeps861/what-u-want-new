import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.component.css'

export class LandingComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#0075C1'}}>
                <a className="navbar-brand landing-title" href="#">What U Want</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search products" />
                        <button className="btn my-2 my-sm-0 landing-search-button" type="submit">
                            Search
                        </button>
                    </form>
                    <div style={{alignContent:'end'}}>
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active btn-info">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item btn-danger">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    
                        <li className="nav-item btn-danger">
                            <a className="nav-link" href="#">Signup!</a>
                        </li>
                        </ul>
                    </div>
                    
                </div>
                </nav>
                <br />
            </div>            
        );
    }

}