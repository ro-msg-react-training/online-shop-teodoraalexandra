import React from 'react';
import { Container } from "@material-ui/core";
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