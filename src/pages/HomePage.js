import React from 'react';
import NavBar from '../components/NavBar';

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <p>Homepage content</p>
            </>
        );
    }
};