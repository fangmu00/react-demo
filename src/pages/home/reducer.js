import defaultState from './state.js';

export default (state = defaultState, { type, payload }) => {
  const { todoList, completedList } = state;
  switch (type) {
    case 'TODOLIST_ADD_TODO':
    {
      const { data, index } = payload;
      todoList.push(data);
      if (index !== undefined) {
        completedList.splice(index, 1)
      }
      return {
        ...state,
        todoList: [...todoList]
      };
    }
    case 'TODOLIST_REMOVE_TODO':
    {
      todoList.splice(payload, 1);
      return {
        ...state,
        todoList: [...todoList]
      };
    }
    case 'TODOLIST_ADD_COMPLETED':
    {
      const { data, index } = payload;
      completedList.push(data);
      todoList.splice(index, 1);
      return {
        ...state,
        completedList: [...completedList]
      };
    }
    case 'TODOLIST_REMOVE_COMPLETED':
    {
      completedList.splice(payload, 1);
      return {
        ...state,
        completedList: [...completedList]
      };
    }
    default:
      return state;
  }
};
