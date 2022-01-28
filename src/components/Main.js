import React, { Component } from 'react';
import './Main.css';

import {FaPlus, FaEdit, FaWindowClose} from 'react-icons/fa';

class Main extends Component{
    // class fields
    state = {
        newTask: '',
        tasks: [
            'Fazer café',
            'Beber água',
            'Deitar'
        ],
    };

    handleInputChange = (e) =>{
        this.setState({
            newTask: e.target.value,
        });
    }

    render(){
        const {newTask, tasks} = this.state;
        return (
            <div className='main'>
                <div className='title'>Lista de Tarefas</div>
                
                <form action='#' className='form'>
                    <input onChange={this.handleInputChange} type='text' className='taskText' value={newTask} placeholder='Cadastrar Nova Tarefa'></input>
                    <button type='submit' className='btn'>
                        <FaPlus />
                    </button>
                </form>

                <ul className='tasks'>
                    {tasks.map((task) => (
                        <li key={task}>
                            {task}
                            <div>
                                <FaEdit className='edit' />
                                <FaWindowClose className='delete' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;