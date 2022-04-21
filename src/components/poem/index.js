import {useState} from 'react';
import './index.scss';
import {Button} from '@mui/material';

import {savePoem, deleteSinglePoemByTitle} from '../../utils/useStorage';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function Poem({isSavedPoem = false, loading, poem}) {

    const [isSaved, setIsSaved] = useState(isSavedPoem);

    const handleSave = () => {
        //TODO: check if already saved

        if(isSaved) {
            //delete the poem
            console.log('called');
            deleteSinglePoemByTitle(poem.title);
            setIsSaved(false);
        }
        else {
            //save
            savePoem(
                poem.title,
                poem.author
            );
            setIsSaved(true);
        }

    }

    return (
        <div className='poem'>

            {loading ? (
                <p>loading......</p>
            ):(
                poem ? (
                    <div className='poem__container'>

                        <h1 className='poem__title'>&ldquo;{poem.title}&rdquo;</h1>
                        <p className='poem__author'>{poem.author}</p>

                        <div className='poem__lines'>
                            {poem.lines.map(line => (
                                line ? <p className='mb-0'>{line}</p> : <br />
                            ))}
                        </div>

                        <Button onClick={handleSave} className='poem__savebutton'>
                            {
                                isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />
                            }
                        </Button>

                    </div>
                ): (
                    <p>No poem</p>
                )
            )}

        </div>
    )
}

export default Poem;