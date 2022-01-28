import React, { Component } from 'react';
import './Main.css';

import {FaPlus, FaEdit, FaWindowClose} from 'react-icons/fa';

class Main extends Component{
    // class fields
    state = {
        newTask: '',
        tasks: [],
    };

    handleInputChange = (e) =>{
        this.setState({
            newTask: e.target.value,
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {tasks} = this.state;
        let {newTask} = this.state;
        newTask = newTask.trim();

        if(tasks.indexOf(newTask) != -1) return;

        const newTasks = [...tasks];
        this.setState({
            tasks: [...newTasks, newTask],
        });
    }

    render(){
        const {newTask, tasks} = this.state;
        return (
            <div className='main'>
                <div className='title'>Lista de Tarefas</div>
                
                <form onSubmit={this.handleSubmit} action='#' className='form'>
                    <input onChange={this.handleInputChange} type='text' className='taskText' value={newTask} placeholder='Cadastrar Nova Tarefa'></input>
                    <button type='submit' className='btn'>
                        <FaPlus />
                    </button>
                </form>

                <ul className='tasks'>
                    {tasks.map((task) => (
                        <li key={task}>
                            {task}
                            <span>
                                <FaEdit className='edit' />
                                <FaWindowClose className='delete' />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;