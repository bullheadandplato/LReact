import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import Header from "./Header";
import {ThemeProvider} from '@material-ui/styles'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const initialState = {
    count: 0,
    open: false
};

const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {count: state.count + 1};
    } else if (action.type === "DEC") {
        return {count: state.count - 1};
    } else if (action.type === "TOGGLE_DRAWER") {
        return {count: state.count, open: action.open};
    }
    return state;
};

const store = createStore(reducer);
const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#62727b',
            main: '#37474f',
            dark: '#62727b',
            contrastText: '#fff',

        },
        primary: {
            light: '#80e27e',
            main: '#4caf50',
            dark: '#087f23',
            contrastText: '#fff',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Header/>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
