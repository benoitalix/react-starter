import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from "./components/Header";

// Styles
import './App.scss';

const app = (
    <div className="wrapper">
        <Header title='React Starter' />
    </div>
);

ReactDOM.render(app, document.getElementById('app'));