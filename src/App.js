import React from 'react';
import Counter from "./counter/Counter";
import {Provider} from 'react-redux';
import {createStore} from "redux";

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return {count: state.count + 1};
    } else if (action.type === "DEC") {
        return {count: state.count - 1};
    }
    return state;
};

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default App;
