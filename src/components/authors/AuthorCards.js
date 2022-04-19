import React from 'react'
import AuthorCard from './AuthorCard';

function AuthorCards({title, data}) {
    return (
        <div className='authorCards__container' id={title}>
            <h2 className='authorCard__title'>
                {title}
            </h2>

            <div className='authors__buttons'>
            {data.map((author, index) => (
                <AuthorCard author={author} />
            ))}
            </div>


        </div>
    )
}

export default AuthorCards;