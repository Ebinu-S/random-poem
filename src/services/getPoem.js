import axios from 'axios';
import {getRandomAuthor} from '../utils/authors';

export async function getRandomPoem() {

    let poem = {};

    try {
        const res = await axios.get(
            'https://poetrydb.org/author,poemcount/' + getRandomAuthor() + ';1'
        )

        if(res.data.status){
            alert('something went wrong')
            poem.status = 'error';
        }
        else {
            poem.status = 'success';
            poem.data = res.data[0];
        }

    }
    catch(err) {
        alert('error while fetching random poem.')
        console.log(err);
        poem.status = 'error';
    }

    return poem;

};