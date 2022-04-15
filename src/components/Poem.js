import {useState, useEffect} from 'react';
import {getRandomPoem} from '../services/getPoem';

function Poem() {

    const [poem, SetPoem] = useState();

    useEffect(() => {
        get();
    },[]);

    async function get () {
        const temp = await getRandomPoem();
        console.log(temp);
    }

    console.log(poem);

    return (
        <div>Poem</div>
    )
}

export default Poem;