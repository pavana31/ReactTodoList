import React, { Component} from  "react";
import  "./NewTodo.css";
import List from './List';
// import uuid from "uuid/v4";


class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { items:'' ,
            todotasks: [ ]
         } ; 
        //  items to store what we are passing the value to our input.
        // todotasks [] to store every value which we are passing to our list
        // this.state = { task: ""  }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);



    } // constr ends here
    addItem (e) {
        alert("Hi "+e.target.value)
    }
    onChange = (event) => {
        this.setState({items: event.target.value});
    }
       onSubmit = (event) => {
        event.preventDefault();
    this.setState({items: '', todotasks : [...this.state.items, this.state.todotasks]
       });
        
    } 

    render() { 
        return ( 
            <div>
               <h1 id="heading">To do List 
        <span> By PAVANA {this.state.a}</span></h1> 
                <form id="form" className ="forminput" onSubmit={this.onSubmit} >
                  <label id="headingh4">Enter your input :</label>
                    <input 
                    id="task"
                    className="inputClass"
                    type="text"
                    placeholder="Enter task.."
                    name="task"
                    value={this.state.items}
                     onChange={this.onChange}
                    >

                    </input>
                    <button id="submit-btn" aria-pressed="true"  > Add to List</button>
                
                    </form>  
                    <List todotasks = {this.state.todotasks}/> 
                
            </div>
         );
    }
}
 
export default NewTodo;