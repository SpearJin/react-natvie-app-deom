import {combineReducers} from '@reduxjs/toolkit';
import orderSlice from '../slices/order';
import userSlice from '../slices/user';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userSlice.reducer,
  order: orderSlice.reducer,
});

export default rootReducer;
