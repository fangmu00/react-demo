import { combineReducers } from 'redux';
import todoList from '../pages/home/reducer';

const reducer = combineReducers({
  todoList,
});

export default reducer;
