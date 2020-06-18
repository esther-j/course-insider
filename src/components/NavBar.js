import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav
                style={{
                    alignItems: 'center',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    boxSizing: 'border-box',
                    display: 'flex',
                    height: '4rem',
                    justifyContent: 'space-between'
                }}
            >
                <div 
                    style={{
                        margin: '0 0.8em'
                    }}
                >
                    <img src={require("../assets/logo.svg")} />
                </div>
            </nav>
        );
    }
};