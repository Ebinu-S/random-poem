import {useEffect, useState} from 'react';
import {getAllSavedPoems} from '../../utils/useStorage';
import SavedCard from './SavedCard';
import './index.scss'

function Saved() {

    const [saved, setSaved] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        setLoading(true);
        const temp = getAllSavedPoems();
        // if(temp === null) {
        //     // alert("something went wrong in /saved")
        // }
        setSaved(temp);
        setLoading(false);
        
    },[])

    return (
        <div className='saved'>
            <h1 className='text-center'>Saved</h1>

            <div className='saved__container'>

                {loading ? (<p>Loading..</p>) : (

                    saved ? (
                        saved.map((save, index) => (<SavedCard author={save.author} title={save.title} key={index} />))
                    ): (
                        <p>No saved poems</p>
                    )

                )}

            </div>

        </div>
    )
}

export default Saved