import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import todo_action from './todo_action';
import checked_off_action from './checked_off_action.js';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '' //input for the todo input; managed using react since not really part of state, just temporary.
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
      }
      handleChange(event){
          this.setState({
              input: event.target.value//when the user types, this box updates.
          });
      }
      submitMessage(){
          this.props.todo_action(this.state.input);//dispatches action with the final input to the action creator.
          this.setState({
              input: ""//resets the input box
          });
      }
      componentWillMount(){
          //localStorage.clear();
          //if the todo list is empty, and the localstorage exists for todo, and the length is more than zero...
          if (this.props.todo.length === 0 && JSON.parse(localStorage.getItem('todos')) && JSON.parse(localStorage.getItem('todos')).length !== 0){
              let legacy_todos = JSON.parse(localStorage.getItem('todos'));
              for (let i = 0; i < legacy_todos.length; i++){
                this.props.todo_action(legacy_todos[i]);
              }//send off an action creator for each item in the local storage, to add it to the todo list.
        }
      }
    render(){
        localStorage.setItem('todos', JSON.stringify(this.props.todo));//stores the todos so that they survive a browser
        //reload. 
        let items = this.props.todo.map((item) => {
            return <div key = {item.toString()}>
                    <input key = {item.toString()} type = "checkbox" name = "todo" onChange = {() => {this.props.checked_off_action(item.toString())}}/>
                    <span id = {item.toString()}>{item}</span>
                </div>//formats each todo into a checked item for display
        });
        return (
            <div className = "sticky">
                    <h2>TODO</h2>
                    <div className = "todo">
                    <form>
                        {items}
                    </form>
                    </div>
                <div className = "enter-input">
                    <input type = "text" value = {this.state.input} onChange = {this.handleChange}/>
                    <button id = 'addTodo' onClick = {this.submitMessage}>Add</button>
                </div>
                
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        todo: state.todo
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({todo_action: todo_action, checked_off_action: checked_off_action}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);