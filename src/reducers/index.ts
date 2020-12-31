import { combineReducers } from 'redux';
import stream from './stream';

const rootReducer = combineReducers({ stream });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
