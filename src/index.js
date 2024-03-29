import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

ReactDOM.createRoot(document.getElementById('root')).render( <
    React.StrictMode >
    <
    RouterProvider router = { router } >
    <
    Provider store = { store } >
    <
    App / >
    <
    /Provider> <
    /RouterProvider>


    <
    /React.StrictMode>
);