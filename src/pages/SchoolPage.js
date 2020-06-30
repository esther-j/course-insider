import React from 'react';
import NavBar from '../components/NavBar';
import "./schoolpage.css"

export default class SchoolPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div id="banner">
                    <h1 id="school-name">School Name</h1>
                </div>
                <div id="dept-container">
                    <div id="dept-1" className="dept">Department 1</div>
                    <div id="dept-2" className="dept">Department 2</div>
                    <div id="dept-3" className="dept">Department 3</div>
                </div>
            </>
        );
    }
};