import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import MenuItem from './MenuItem';


const menuItems = [
    { name: 'Students', exact: true, to: '/student', iconClassName: 'bi bi-person' },
    { name: 'LessonPlan', exact: true, to: '/', iconClassName: 'bi bi-journal-medical' },
    { name: 'Settings', exact: true, to: '/settings', iconClassName: 'bi bi-gear' },
]

const SideMenu = (props) => {
    const [inActive, setInActive] = useState(true);

    useEffect(() => {
        props.onCollapse(inActive)
    }, [props, inActive])

    const toggleButtom = () => {
        setInActive(!inActive);
    };

    // const expandNavbar = () => {
    //     if(inActive){
    //         setInActive(false);
    //     }
    // };

    return (
        <div className={`side-menu ${inActive ? 'inactive' : ''}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>
                <div className='toggle-menu-btn' onClick={toggleButtom}>
                    {inActive ? (<i className="bi bi-arrow-right-square-fill"></i>) : (<i className="bi bi-arrow-left-square-fill"></i>)}
                </div>
            </div>
            <div className='divider'></div>
            <div className='main-menu'>
                <ul>
                    {
                        menuItems.map((menuItem, index) => (
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                exact={menuItem.exact}
                                iconName={menuItem.iconClassName}
                                to={menuItem.to}
                                
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideMenu

