import React, { Component } from 'react';
import './Main.css';

import {FaPlus} from 'react-icons/fa';

class Main extends Component{
    // class fields
    state = {
        newTask: '',
    };

    handleInputChange = (e) =>{
        this.setState({
            newTask: e.target.value,
        });
    }

    render(){
        const {newTask} = this.state;
        return (
            <div className='main'>
                <div className='title'>Lista de Tarefas</div>
                <form action='#' className='form'>
                    <input onChange={this.handleInputChange} type='text' className='task' value={newTask}></input>
                    <button type='submit' className='btn'>
                        <FaPlus />
                    </button>
                </form>
            </div>
        );
    }
}

export default Main;