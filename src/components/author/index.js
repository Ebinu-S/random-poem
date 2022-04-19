import {useState, useEffect} from 'react';
import './index.scss';
import {useParams} from 'react-router-dom';
import {getTitlesByAuthor} from '../../services/getPoem';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Author() {

    const {author} = useParams();
    const [loading, setLoading] = useState(false);

    const [titles, setTitles] = useState([]);

    useEffect(() => {
        get();
    },[]);

    async function get () {

        setLoading(true);
        const temp = await getTitlesByAuthor(author);

        if(temp.status === "success"){
            setTitles(temp.data);
        }
        else {
            alert("Get title status is error");
            // todo snackbar and error message
        }
        setLoading(false)
    }

    console.log(titles);

    return (
        <div className='author'>
            <h1 className='text-center'>author</h1>
            <h2 className='author__Hname text-center'>{author}</h2>

            <div className='author__container'>
                {
                    loading ? <p>Loading....</p> : (
                        <>
                            <div className='author__vetiLine'></div>
                            <p>Titles:</p>
                            <div className='author__lines'>
                                {titles.map((data) => (
                                    <Button component={Link} to={`/saved/${author}/${data.title}`} className='author__link'>
                                        <p>{data.title}</p>
                                    </Button>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default Author