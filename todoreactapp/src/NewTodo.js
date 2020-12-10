import React, { Component} from  "react";
import  "./NewTodo.css";
import { Button } from 'reactstrap';
// import List from './List';
// import uuid from "uuid/v4";


class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:'' ,
            todotasks: [ ]
         } ; 
        //  items to store what we are passing the value to our input.
        // todotasks [] to store every value which we are passing to our list
        // this.state = { task: ""  }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
         
         this.update= this.update.bind(this);
        this.add = this.add.bind(this);
         this.remove = this.remove.bind(this);


    } // constr ends here
    // add items
    add() {      
        this.setState(prev => {
            return {
                items: '',
                todotasks: prev.todotasks.concat(prev.items)
            };
        });
    }


    update(event)  {
        this.setState({
            items: event.target.value
        });
        // alert (this.state.items)
    }
    //    onSubmit = (event) => {
    //     event.preventDefault();
    // this.setState({items: '', todotasks : [...this.state.items, this.state.todotasks]
    //    });
        
    //  } 
   remove(key) {
        this.setState(prev => {
            let todotasks = [...prev.todotasks];

            todotasks.splice(key, 1);

            return {
                items: '',
                todotasks
            };
        });
    }

    render() { 
        return ( 
            <div>
               <h1 id="heading">To do List By
        <span class="text-success" >  PAVANA </span></h1> 
                <h4 class="text-primary" >Todo list for {this.state.todotasks.length} Todo tasks</h4>
                 {/* ul fo remove */}
                 
                <div class="container">
                {/* <form id="form" className ="forminput" onSubmit={this.onSubmit} > */}
                  <label id="headingh4" class="container" >Prioritize your tasks here</label>
                    <input 
                    id="task"
                    className="inputClass"
                    type="text"
                    placeholder="Have Tasks in mind? Enter here !"
                    name="task"
                    // value={this.state.items}
                    value={this.state.items}
                    onChange={this.update}
                    >

                    </input>
                    <button id="submit-btn" class="btn btn-info btn-lg"  onClick={this.add} aria-pressed="true"  >
                         Add to List </button>
                         {/* ordered list */}
                         <div class="container" >
                         <ol>
                    {
                        this.state.todotasks.map((item, i) => (
                            <li key={i}>
                                {item}
                                {/* {console.log(item)} */}
                                {' '}
                                <button
                                    type="button" class="btn btn-danger"
                                    onClick={() => this.remove(i)}>Cancel  X<span class="glyphicon glyphicon-trash"></span></button>
                                    
                            </li>
                        ))
                    }
                </ol>
                </div>
                
                    {/* </form>   */}
                    {/* <List todotasks = {this.state.todotasks}/>  */}
                </div>
            </div>
         );
    }
}
 
export default NewTodo;