import React, { Component } from "react";

// import NewTodo from "./NewTodo.js";

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.state = { items:[] };
        // this.addItem = this.addItem.bind(this);
        this.state = {
            a:10
         }
    }
    render() { 
        
        return ( 
           <div className="TodoList">
               {/* <ul>{todoList}</ul> */}
               {/* <NewTodo createTodo={this.state.a}/> */}

           </div> 
         );
    }
}
 
export default TodoList;