import React, {Component} from "react";

class AddTodo extends Component{
  constructor(props){
    super(props)
    this.input = React.createRef();
  }
  inserirItem(e){
    e.preventDefault()
    var node = this.input.current.value;
    var text = node.trim();
    this.props.onAddClick(text);
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.input}/>
        <button className="btn-insert" onClick={(e) => this.inserirItem(e)}>Incluir Item na Lista</button>
      </div>
    )
  }

}

export default AddTodo;