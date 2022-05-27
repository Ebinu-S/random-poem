// Manage local storage

//* GET SAVED POEMS
export function savePoem (title, author) {

    let savedPoems = [];

    savedPoems = JSON.parse(localStorage.getItem('randompoem_saved'));

    //create ana id

    if(savedPoems === null) {
        savedPoems = [
            {
                title,
                author
            }
        ]
    }
    else {
        savedPoems.unshift(
            {
                title,
                author
            }
        )
    }

    localStorage.setItem('randompoem_saved', JSON.stringify(savedPoems));

}

//* GET ALL THE SAVED POEMS
export function getAllSavedPoems () {
    
    const saved = JSON.parse(localStorage.getItem('randompoem_saved'));

    if(saved){
        return saved;
    }
    else {
        return null; 
    }


}

export function deleteAllSavedPoems () {

    localStorage.removeItem('randompoem_saved');

}

//* Delete poem by title
export function deleteSinglePoemByTitle(title) {

    const poems =  JSON.parse(localStorage.getItem('randompoem_saved'));
    
    const index = poems.findIndex(poem => poem.title === title);

    if(index === -1 ){
        alert('Poem does not exist in LS');
    }
    else{
        poems.splice(index , 1)
    }

    localStorage.setItem('randompoem_saved', JSON.stringify(poems));

    console.log(poems);

}
