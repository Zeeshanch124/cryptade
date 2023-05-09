import React from 'react'
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';
import Button from '../Common/Button';

const Navbar = () => {
    const navElements = [
        { name: 'Buy Crypto', to: '/' },
        { name: 'Trends', to: '/' },
        { name: 'Trade', to: '/' },
        { name: 'NFT', to: '/' }];
    return (
        <nav className='mx-auto flex items-center  h-10 py-10'>
            <div className='flex-0' >
                <div className='w-7 h-9'> <Icon name='logo' /> </div>
            </div>

            <div className='flex flex-1 justify-center space-x-12 '>
                {navElements.map((item) => {
                    return (
                        <NavLink to={item.to}> {item.name} </NavLink>
                    )
                })}
            </div>

            <div className='flex-0'>
                <NavLink to='' className='mr-4'>Login</NavLink>
                <NavLink to=''> <Button value='Register' /> </NavLink>

            </div>
        </nav>
    )
}

export default Navbar;