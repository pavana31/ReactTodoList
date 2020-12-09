import React, { Component} from  "react";
import  "./NewTodo.css";
import uuid from "uuid/v4";


class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: ""  }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(event) {
       this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodo ={...this.state, id: uuid(), completed: false};
        this.props.createTodo(newTodo);
        this.setState({task:""});

    }


    render() { 
        return ( 
            <div>
               <h1 id="heading">To do List 
               <span> By PAVANA</span></h1> 
                <form id="form" className ="forminput" onSubmit={this.addItem} >
                  <label id="headingh4">Enter your input :</label>
                    <input 
                    id="task"
                    className="inputClass"
                    type="text"
                    placeholder="enter task.."
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    >

                    </input>
                    <button id="submit-btn" type="submit" > Add to List</button>
                    </form>   

            </div>
         );
    }
}
 
export default NewTodo;