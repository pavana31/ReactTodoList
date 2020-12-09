import React, { Component } from "react";
import TodoChanges from './TodoChanges';
import NewTodo from "./NewTodo.js";

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = { items:[] };
        // this.addItem = this.addItem.bind(this);
        this.state = { }
    }
    render() { 
        
        return ( 
           <div className="TodoList">
               <ul>{todoList}</ul>
               {/* <NewTodo createTodo={this.create}/> */}

           </div> 
         );
    }
}
 
export default TodoList;