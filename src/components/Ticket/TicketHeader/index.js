import React from 'react'
import './TicketHeader.css';

export  default ({name, onClickEvent, fromList}) => (
    <div className='ticket-container-header'>
        {name}
        <div className='header-button' onClick={onClickEvent}>
            <i className="material-icons">
                {fromList ? 'add_circle_outline' : 'remove_circle_outline'}
            </i>
        </div>
    </div>
)