import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SchoolPage from './SchoolPage';
import './homepage.css';


export default class HomePage extends React.Component {
    render() {
        return (
            <>

                <header>
                    <NavBar />
                </header>
                <div id="main-container">
                    <div id="main-flex-container">
                        <div id="text-block">
                            <h1>Discover and share course advice</h1>
                            <p>Make schedule planning simple!</p>
                            <div id="searchbar-container">
                                <input type="text" placeholder="Find your school..." />
                                
                                    <Link id="submit-button" class="no-text-deco" to="/school">Go</Link>
                            </div>
                        </div>
                        <div id="img-block">
                            <img src={require('../assets/homepage-img.svg')}/>
                        </div>
                    </div>
                </div>


            </>
        );
    }
};