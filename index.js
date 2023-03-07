const insert = document.getElementById('insert');
const noteMain = document.getElementById('noteMain');

const lsStorage = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value)
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}





const addNote = (text = " ") => {



    const htmlData = `
   <div class="note">
    <div class="note-icons">
              <img src="img/edit.png" id = "edit" alt="editMe">
              <img src="img/delete.png" id ="delete" alt="deleteMe">
             </div>
              <div class="note-box ${text ? "" : "hidden"} "></div>
              <textarea class="note-text ${text ? "hidden" : ""}"></textarea>
          </div>
    </div>
  
    `





    noteMain.insertAdjacentHTML('afterbegin', htmlData);



    const noteBox = document.querySelector('.note-box')
    const textArea = document.querySelector('.note-text')
    const del = document.getElementById('delete');
    const edit = document.getElementById('edit');
    const note = document.querySelector('.note');
    const noteIcons = document.querySelector('.note-icons');

    del.addEventListener('click', () => {
        note.remove();
        lsStorage();
    })


    textArea.value = text;
    noteBox.innerHTML = text;



    edit.addEventListener('click', () => {

        noteBox.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

    })



    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        noteBox.innerHTML = value;
        lsStorage();
        return value;
    })

}

const localNotes = JSON.parse(localStorage.getItem('notes'));
console.log(localNotes);
if (localNotes) {
    localNotes.forEach((note) => {
        addNote(note);
    })
}

insert.addEventListener('click', () => addNote());



