import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function AuthorSearch() {

    const autoComplete = () => {}

    const handleSearch = () => {}
    
    return (
        <form onSubmit={handleSearch} >
            <input type='search' onChange={autoComplete} placeholder='Search Author'>
            </input>
            <SearchIcon />
        </form>
    )
}

export default AuthorSearch