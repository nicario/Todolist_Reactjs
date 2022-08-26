import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component{
  render(){
    return(
      <ul className='list-clean'>
        {
          this.props.todos.map(
            todo => 
            <Todo 
              key = {todo.id}
              {...todo}
            />
          )
        }
      </ul>
    )
  }
}

export default TodoList;