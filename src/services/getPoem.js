import axios from 'axios';
import {getRandomAuthor} from '../services/authors';

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

export async function getPoemByTitle(title) {

    let poem = {};

    try{
        const res = await axios.get('https://poetrydb.org/title/' + '/' + title + '/lines.json');

        if(res.data.status){
            alert('something went wrong')
            poem.status = 'error';
        }
        else {
            poem.status = 'success';
            poem.data = res.data[0];
            poem.data.title = title;
        }

    }
    catch(err) {
        alert('error while fetching random poem.')
        console.log(err);
        poem.status = 'error';
    }

    return poem;

}

export async function getTitlesByAuthor(author) {

    let titles = {};

    try{
        const res = await axios.get('https://poetrydb.org/author/' + author + '/title');

        if(res.data.status){
            alert('something went wrong')
            titles.status = 'error';
        }
        else {
            titles.status = 'success';
            titles.data = res.data;
        }

    }
    catch(err) {
        alert('error while fetching random poem.')
        console.log(err);
        titles.status = 'error';
    }

    return titles;

}