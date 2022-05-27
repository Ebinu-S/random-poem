import React from 'react'
import { Button } from '@mui/material';
import {deleteAllSavedPoems} from '../../../utils/useStorage';
function DeleteAllPoems() {
    
    function deleteAllPoems (){
        if(window.confirm("Are you sure you?") === true){
            deleteAllSavedPoems();
            alert('delted');
        }
    }

    return (
        <div className='settings__card'>
            <h3>Delete all poems</h3>
            <p>All poems will be deleted from local storage</p>
            <div className='buttons'>
                <Button onClick={deleteAllPoems} variant="contained">Delete all poem</Button>
            </div>
        </div>
    )
}

export default DeleteAllPoems