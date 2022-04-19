import React from 'react';
import './index.scss';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

function Sidebar({toggleSideBar}) {
    return (
        <div className='sidebar'>

            <div className='sidebar__container'>

                <Button onClick={toggleSideBar} className='sidebar__closebtn'>
                    <ArrowBackIcon />
                </Button>

                <div className='sidebar__buttons'>

                    <Button component={Link} to='/' className='sidebar__button'>
                        <p>Home</p>
                        <HomeIcon />
                    </Button>

                    <Button component={Link} to='/saved' className='sidebar__button'>
                        <p>View Saved</p>
                        <BookmarkIcon />
                    </Button>

                    <Button component={Link} to='/settings' className='sidebar__button'>
                        <p>Settings</p>
                        <SettingsIcon />
                    </Button>

                </div>

            </div>

            <div className='sidebar__fill'>
                <Button onClick={toggleSideBar} />
            </div>

        </div>
    )
}

export default Sidebar