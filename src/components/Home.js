import Poem from './poem';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button } from '@mui/material';

import {getRandomPoem} from '../services/getPoem';

import CasinoIcon from '@mui/icons-material/Casino';

function Home() {

    const [poem, SetPoem] = useState();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        get();
    },[]);

    async function get () {

        setLoading(true);
        const temp = await getRandomPoem();

        if(temp.status === "success"){
            SetPoem(temp.data);
        }
        else {
            alert("Get Random Poem status is error");
            // todo snackbar and error message
        }
        setLoading(false)
    }

    return (
        <div className='home'>
            <Button component={Link} to='/' className='generate__random'>
                <CasinoIcon />
            </Button>
            <Poem loading={loading} poem={poem}/>
        </div>
    )
}

export default Home