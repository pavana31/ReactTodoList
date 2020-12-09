import React, { Component} from  "react";
import  "./NewTodo.css";

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                    >

                    </input>
                    <button id="submit-btn" type="submit" > Add to List</button>
                    </form>   

            </div>
         );
    }
}
 
export default NewTodo;