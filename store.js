import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { orderReducer } from './reducers'
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        form: formReducer,
        order: orderReducer
    }),
    applyMiddleware(thunk)
);

export default store;