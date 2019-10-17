import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from "./components/Header";

// Styles
import './App.scss';

class App extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <Header title='React Starter' />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));