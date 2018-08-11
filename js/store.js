import { applyMiddleware, createStore } from 'redux';
// Logger with default options
import logger from 'redux-logger';

import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(logger)
)

export default store;