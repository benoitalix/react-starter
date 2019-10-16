import React, { Component } from "react";

// Styles
import './Header.scss';

class Header extends React.Component {
    render(){
        return (
            <header className="main-header">
                <h1 className="main-title">{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;