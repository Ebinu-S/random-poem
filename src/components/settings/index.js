import './index.scss';
import React from 'react'
import DeleteAllPoems from './components/DeleteAllPoems';



function Settings() {
    return (
        <div className='settings'>
            <h1 className='text-center'>Settings</h1>

            <div className='settings__container'>
                <DeleteAllPoems />
            </div>

        </div>
    )
}

export default Settings;