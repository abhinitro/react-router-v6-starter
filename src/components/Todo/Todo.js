import React, { Component,memo } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>

                {
  
                this.props.todos.map(item=>( <span> My todo {item}</span>)) 
               
                }
                
                
                 
            </div>
        );
    }
}

export default memo(Todo);
