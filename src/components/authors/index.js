import './index.scss';
import AuthorSearch from './AuthorSearch';
import {authorsByAlphabet} from '../../constant/constants';
import React from 'react'
import AuthorCards from './AuthorCards';
import { Button } from '@mui/material';

function Authors() {

    return (
        <div className='authors'>

            <h1 className='text-center'>Authors</h1>

            <div className='authors__container'>
                <AuthorSearch />
                
                <div className='authors__list'>

                    <div className='authors__firstLetter'>
                        {authorsByAlphabet.map((author, index) => (
                            <Button href={`#${author.title}`}>{author.title}</Button>
                        ))}
                    </div>

                    {
                        authorsByAlphabet.map((author, index) => (
                            <AuthorCards title={author.title} key={index} data={author.data} />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Authors;