import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SavedCard({author,title}) {
    return (
        <Button component={Link} to={`/saved/${author}/${title}`} className='saved__card'>
            <h2>{title}</h2>
            <p>{author}</p>
        </Button>
    )
}

export default SavedCard;
