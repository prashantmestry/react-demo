import { createStore, combineReducers, applyMiddleware } from 'redux';
import financeReducer from '../finance/financeReducer';
import thunk from 'redux-thunk';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    finance: financeReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;