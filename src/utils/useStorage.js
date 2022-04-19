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

//todo delete poem