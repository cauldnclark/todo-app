import React, { memo } from 'react';
import TodoListItem from './TodoListItem';
import { TodoContext } from '../contexts/TodoProvider';

function TodoList() {
  return (
    <TodoContext.Consumer>
      {({ todoList }) => (
        <>
          {todoList.map(item => (
            <TodoListItem key={item.id} item={item} />
          ))}
        </>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoList);
