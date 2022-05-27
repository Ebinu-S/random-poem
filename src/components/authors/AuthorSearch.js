import {useRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import autocomplete from 'autocompleter';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import authors from '../../constant/constants';

function AuthorSearch() {

    const input = useRef(null);

    // autocomplete({
    //     input: input.current,
    //     fetch: function(text, update) {
    //         text = text.toLowerCase();

    //         var suggestions = authors.filter(n => n.toLowerCase().startsWith(text))
    //         update(suggestions);
    //     },
    //     onSelect: function(item) {
    //         input.current.value = item;
    //     }
    // });

    const handleSearch = () => {}
    
    return (
        <form onSubmit={handleSearch} >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={authors}
                    // sx={{ width: 300 }}
                    renderInput={(params) => {
                        console.log(params);
                        return (
                        // <input type='search' ref={input} placeholder='Search Author'>
                        // </input>
                        <TextField {...params} variant='standard' placeholder='Search Author'/>
                        )
                    }
                    }
                />
                                        {/* <input type='search' ref={input} placeholder='Search Author'>
                        </input> */}
            <SearchIcon />
        </form>
    )
}

export default AuthorSearch;

// inputProps . value