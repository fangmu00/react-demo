import { creator } from '../../app/action'

export const addToDo = (data, index) => creator({ type: 'TODOLIST_ADD_TODO', payload: { data, index } });
export const addCompleted = (data, index) => creator({ type: 'TODOLIST_ADD_COMPLETED', payload: { data, index } });
export const removeToDo = (index) => creator({ type: 'TODOLIST_REMOVE_TODO', payload: index });
export const removeCompleted = (index) => creator({ type: 'TODOLIST_REMOVE_COMPLETED', payload: index });
