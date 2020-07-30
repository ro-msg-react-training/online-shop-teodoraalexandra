import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Styles/theme";
import App from './Components/App';
import './Styles/cart.css';
import './Styles/header.css';
import './Styles/home.css';
import './Styles/productDetails.css';
import './Styles/productPage.css';
import './Styles/productList.css';
import 'fontsource-roboto';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root')
);
