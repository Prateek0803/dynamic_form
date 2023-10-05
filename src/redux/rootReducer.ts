import { combineReducers } from 'redux';
import formReducer from './formSlice';

const rootReducer = combineReducers({
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;