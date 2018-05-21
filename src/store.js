import { createStore } from 'redux'
import reducer from './reducers/status'


const store = createStore(reducer, {
    clicked:'Not loaded',
    
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
