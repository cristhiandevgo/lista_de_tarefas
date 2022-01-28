import React, { Component } from 'react';
import './Main.css';

import {FaPlus, FaEdit, FaWindowClose} from 'react-icons/fa';

class Main extends Component{
    // class fields
    state = {
        newTask: '',
        tasks: [],
        index: -1,
    };

    handleInputChange = (e) =>{
        this.setState({
            newTask: e.target.value,
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const {tasks, index} = this.state;
        let {newTask} = this.state;
        newTask = newTask.trim();

        if(tasks.indexOf(newTask) !== -1) return;

        const newTasks = [...tasks];

        if(index === -1){
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: '',
            });
        }else{
            newTasks[index] = newTask;

            this.setState({
                tasks: [...newTasks],
                index: -1,
            });
        }

        
    }

    handleEdit = (e, index) => {
        const {tasks} = this.state;
        this.setState({
            index,
            newTask: tasks[index],
        });
    }

    handleDelete = (e, index) => {
        const {tasks} = this.state;
        const newTasks = [...tasks];
        newTasks.splice(index, 1);

        this.setState({
            tasks: [...newTasks],
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
                    {tasks.map((task, index) => (
                        <li key={task}>
                            {task}
                            <span>
                                <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit' />
                                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className='delete' />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;