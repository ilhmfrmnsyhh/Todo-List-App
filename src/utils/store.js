import { createStore } from 'redux';
import rootReducer from './reducers'; // Anda perlu membuat reducers terlebih dahulu

const store = createStore(rootReducer);

export default store;
