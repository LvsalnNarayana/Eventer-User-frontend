/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationMenu = () => {
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
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon className='!text-white' />
                </Badge>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                disablePortal
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    style: {
                        width: '400px',
                    },
                }}
            >
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>Profile</p>
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>My account</p>
                <p className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>Logout</p>

            </Menu>
        </div>
    );
}

export default NotificationMenu