import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import studentsReducer from './students/students.reducer';
import teachersReducer from './teachers/teachers.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    students: studentsReducer,
    teachers: teachersReducer
});


export default persistReducer(persistConfig, rootReducer);





