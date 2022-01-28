import React from 'react';
import propTypes from 'prop-types';
import './Tasks.css';
import {FaEdit, FaWindowClose} from 'react-icons/fa';

function Tasks({tasks, handleEdit, handleDelete}){
    return (
        <ul className='tasks'>
            {tasks.map((task, index) => (
                <li key={task}>
                    {task}
                    <span>
                        <FaEdit onClick={(e) => handleEdit(e, index)} className='edit' />
                        <FaWindowClose onClick={(e) => handleDelete(e, index)} className='delete' />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Tasks.propTypes = {
    tasks: propTypes.array.isRequired,
    handleEdit: propTypes.func.isRequired,
    handleDelete: propTypes.func.isRequired,
};

export default Tasks;