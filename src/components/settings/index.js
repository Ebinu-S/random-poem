import './index.scss';
import React from 'react'
import { Button } from '@mui/material';
import {deleteAllSavedPoems} from '../../utils/useStorage';

function deleteAllPoems (){
    deleteAllSavedPoems();
    alert('delted');
}

function Settings() {
    return (
        <div className='settings'>
            <h1 className='text-center'>Settings</h1>

            <div className='settings__container'>

                <div className='settings__card'>
                    <h3>Delete all saved poems</h3>
                    <Button onClick={deleteAllPoems}>Delete all poem</Button>
                </div>

            </div>

        </div>
    )
}

export default Settings;