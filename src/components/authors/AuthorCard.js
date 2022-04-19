import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function AuthorCard({author}) {
    return (
        <Button component={Link} to={`/author/${author}`} className='authorCard'>
            {author}
        </Button>
    )
}
