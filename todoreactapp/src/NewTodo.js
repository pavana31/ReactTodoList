import React, { Component} from  "react";
import  "./NewTodo.css";
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
               <h1 id="heading">To do List 
        <span> By PAVANA </span></h1> 
                <h4>Todo list for {this.state.todotasks.length} todotasks</h4>
                 {/* ul fo remove */}
                 <ol>
                    {
                        this.state.todotasks.map((item, i) => (
                            <li key={i}>
                                {item}
                                {/* {console.log(item)} */}
                                {' '}
                                <button
                                    type="button"
                                    onClick={() => this.remove(i)}>x</button>
                            </li>
                        ))
                    }
                </ol>
                
                {/* <form id="form" className ="forminput" onSubmit={this.onSubmit} > */}
                  <label id="headingh4">Enter your input :</label>
                    <input 
                    id="task"
                    className="inputClass"
                    type="text"
                    placeholder="What needs to do ?"
                    name="task"
                    // value={this.state.items}
                    value={this.state.items}
                    onChange={this.update}
                    >

                    </input>
                    <button id="submit-btn" onClick={this.add} aria-pressed="true"  > Add to List</button>
                
                    {/* </form>   */}
                    {/* <List todotasks = {this.state.todotasks}/>  */}
                
            </div>
         );
    }
}
 
export default NewTodo;