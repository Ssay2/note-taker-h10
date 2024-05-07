document.addEventListener('DOMContentLoaded', function() {
    const notesList = document.getElementById('notes');
    const noteForm = document.getElementById('note-form');
    const noteTitle = document.getElementById('note-title');
    const noteText = document.getElementById('note-text');
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');

  
    function saveNote() {
        const title = noteTitle.value;
        const text = noteText.value;

        if (title && text) {
            const noteItem = document.createElement('li');
            noteItem.textContent = title;
            notesList.appendChild(noteItem);
            clearForm();
        }
    }

   
    function clearForm() {
        noteTitle.value = '';
        noteText.value = '';
    }


    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        saveNote();
    });


    clearButton.addEventListener('click', function(event) {
        event.preventDefault();
        clearForm();
    });

  
    notesList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            // Display the selected note in the right-hand column
            noteTitle.value = event.target.textContent;
            noteText.value = 'Sample note text';
        }
    });
});
