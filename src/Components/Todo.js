import React, {Component} from 'react';
import TodoItem from './TodoItem';
import ProtoTypes from 'prop-types';

class Todo extends Component{
render(){
    
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ))

}
    
}
Todo.ProtoTypes = {
    todos : ProtoTypes.array.isRequired
}
export default Todo;
