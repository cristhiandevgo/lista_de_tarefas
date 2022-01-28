import React from 'react';
import propTypes from 'prop-types';
import {FaPlus} from 'react-icons/fa';
import './Form.css';

function Form({ handleInputChange, handleSubmit, newTask }){
    return (
        <form onSubmit={handleSubmit} action='#' className='form'>
            <input onChange={handleInputChange} type='text' className='taskText' value={newTask} placeholder='Cadastrar Nova Tarefa'></input>
            <button type='submit' className='btn'>
                <FaPlus />
            </button>
        </form>
    );
}

Form.propTypes = {
    handleInputChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    newTask: propTypes.string.isRequired,
};

export default Form;