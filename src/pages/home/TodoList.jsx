import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../../components/todo/Input';
import Item from '../../components/todo/Item';
import { addToDo, removeToDo, addCompleted, removeCompleted } from './action';

const TodoList = ({ handleAddToDo, handleAddCompleted, handleRemoveToDo, handleRemoveCompleted, todoList, completedList }) => (
  <div>
    <h1>{ 'ToDoList' }</h1>
    <Input placeholder='添加ToDo' onSubmit={handleAddToDo} />
    <h1>{ '正在进行' }</h1>
    <div>
      {
        todoList.map((item, index) => <Item defaultChecked={false} key={index} data={item} onDelete={() => { handleRemoveToDo(index)} } onChange={() => { handleAddCompleted(item, index);}} />)
      }
    </div>
    <h1>{ '已完成' }</h1>
    <div>
      {
        completedList.map((item, index) => <Item defaultChecked key={index} data={item} onDelete={() => { handleRemoveCompleted(index)} } onChange={() => { handleAddToDo(item, index);}} />)
      }
    </div>
  </div>
    )

TodoList.propTypes = {
  handleAddToDo: PropTypes.func,
  handleAddCompleted: PropTypes.func,
  handleRemoveToDo: PropTypes.func,
  handleRemoveCompleted: PropTypes.func,
  todoList: PropTypes.array,
  completedList: PropTypes.array,
}

TodoList.defaultProps = {
  handleAddToDo: () => {},
  handleAddCompleted: () => {},
  handleRemoveToDo: () => {},
  handleRemoveCompleted: () => {},
  todoList: [],
  completedList: [],
}

const mapStateToProps = ({ todoList:{ completedList, todoList } }) => {
  return {
    completedList,
    todoList
  }
};

const mapDispatchToProps = dispatch => ({
  handleAddToDo: (data, index) => dispatch(addToDo(data, index)),
  handleRemoveToDo: index => dispatch(removeToDo(index)),
  handleAddCompleted: (data, index) => dispatch(addCompleted(data, index)),
  handleRemoveCompleted: index => dispatch(removeCompleted(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList);
