import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav
                style={{
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div 
                    style={{
                        margin: '0.6em 0 0.6em 0'
                    }}
                >
                    <img src={require("../assets/logo.svg")} />
                </div>
            </nav>
        );
    }
};