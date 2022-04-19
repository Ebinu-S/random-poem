import './index.scss';

import {useState} from 'react';
import { Outlet } from 'react-router-dom';

import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar';

function Layout() {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen); 
        // log
    }

    return (
        <div className='layout'>
            
            <Button className='sideButton' onClick={toggleSideBar}>
                <MenuIcon />
            </Button>

            {sideBarOpen && <Sidebar toggleSideBar={toggleSideBar}/>}

            {/* blur this page class */}
            <main className='page'>
                <Outlet />
            </main>

        </div>
    )
}

export default Layout;