import React, { Component } from 'react';
import './Main.css';

import Form from './Form';
import Tasks from './Tasks';

class Main extends Component{
    // class fields
    state = {
        newTask: '',
        tasks: [],
        index: -1,
    };

    componentDidMount(){
        const tasks = JSON.parse(localStorage.getItem('tasks'));

        if(!tasks) return;

        this.setState({tasks});
    }

    componentDidUpdate(prevProps, prevState){
        const {tasks} = this.state;
        
        if(tasks === prevState.tasks) return;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

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
                
                <Form 
                    handleSubmit = {this.handleSubmit}
                    handleInputChange = {this.handleInputChange}
                    newTask = {newTask}
                />

                <Tasks
                    tasks = {tasks}
                    handleEdit = {this.handleEdit}
                    handleDelete = {this.handleDelete}
                />

                
            </div>
        );
    }
}

export default Main;