import { combineReducers } from 'redux';
import sidebar from './sidebar';
import  sendMail  from './sendmail';

const rootReducer = combineReducers({
    sidebar,
    sendMail
});

export default rootReducer;