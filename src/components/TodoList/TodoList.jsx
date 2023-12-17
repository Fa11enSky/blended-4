import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, GridItem, Todo } from 'components';
import { selectFilteredTodos } from '../../redux/selector';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <Todo id={todo.id} text={todo.text} counter={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
