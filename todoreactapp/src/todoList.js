import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items:[] };
        this.addItem = this.addItem.bind(this);
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