/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
const UserMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                className='!text-white'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disablePortal
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>Profile</p>
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>My account</p>
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>Logout</p>
            </Menu>
        </div>
    );
}

export default UserMenu