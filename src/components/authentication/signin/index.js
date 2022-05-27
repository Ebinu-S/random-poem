import React from 'react'
import { Button } from '@mui/material';

function Signin({toggleLogin}) {
    return (
        <div>
        <h2>Sign in</h2>

        <form onSubmit={""}>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <Button onClick={""} disableElevation variant="contained">Login</Button>
        </form>
        <Button onClick={toggleLogin} disableElevation>Already have an account? </Button>
    </div>
    )
}

export default Signin