import {useState, useEffect} from 'react';
import Poem from '../../poem';
import {useParams} from 'react-router-dom';
import {getPoemByTitle} from '../../../services/getPoem';

function SavedPoemContainer() {
    const  {author, title } = useParams();

    const [poem, SetPoem] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        get();
    },[])

    async function get () {

        setLoading(true);
        const temp = await getPoemByTitle(title);

        if(temp.status === "success"){
            temp.data.author = author;
            SetPoem(temp.data);
        }
        else {
            alert("Get saved Poem status is error");
            // todo snackbar and error message
        }
        setLoading(false)
    }


    return (
        <div className='savedpoem__container'>
            <Poem isSavedPoem={true} loading={loading} poem={poem} />
        </div>
    )
}

export default SavedPoemContainer