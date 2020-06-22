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
                    <div id="dept-1" class="dept">Department 1</div>
                    <div id="dept-2" class="dept">Department 2</div>
                    <div id="dept-3" class="dept">Department 3</div>
                </div>
            </>
        );
    }
};