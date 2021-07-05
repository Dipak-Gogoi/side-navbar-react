import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    const { name, iconName, to, exact } = props;

    return (
        <li>
            <NavLink exact={exact} to={to} className='menu-item'>
                <div className='menu-icon'>
                    <i className={iconName}></i>
                </div>
                <span>{name}</span>
            </NavLink>
        </li>
    )
}

export default MenuItem
