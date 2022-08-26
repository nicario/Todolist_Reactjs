import AddTodo from './componentes/AddTodo';
import TodoList from './componentes/TodoList';
import './App.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';

class App extends Component{
  render(){
    const {dispatch, visibleTodos} = this.props;
    return(
      <div className = 'App'>
        <div className= 'App-header'>
          <AddTodo onAddClick = {(text) => dispatch(addTodo(text)) } />
          <TodoList todos = {visibleTodos} />
        </div>
      </div>
    )
  }
}

function select(state){
  return{
    visibleTodos: state.todos
  }
}



export default connect(select)(App);
