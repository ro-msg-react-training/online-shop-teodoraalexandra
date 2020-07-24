import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container } from "@material-ui/core";
import theme from "../Styles/theme";
import Header from "./Header";
import Main from "./Main";
import 'fontsource-roboto';

// This component will be rendered by our <Router>
function App() {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    );
}

export default App