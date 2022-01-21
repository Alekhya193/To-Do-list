console.log("lets get started")

//user add node add it to local storage

let addbtn = document.getElementById('addbtn')
addbtn.addEventListener('click', function () {
    let addtxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj))
    addtxt.value = ''
    console.log(notesobj)

    shownotes();
})

//function to show a note
function shownotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes)
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
    <div class="notecard my-2 mx-2 card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text"> ${element} </p>
      
      <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
    </div>
  </div>
    
    `
    });

    let noteselm = document.getElementById('notes')
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML= `There is no To Do list! use 'Add a note' to add new To Do list`
    }

}

// function to delete note

function deletenote(index) {
    console.log('i m deleting', index)

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes)
    }

    notesobj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(notesobj))
    shownotes();
}

//search

// let searchtxt= document.getElementById('searchtxt')
// searchtxt.addEventListener('input',function(){
       
//        let inputval=searchtxt.value
//        console.log("ur inputting",inputval)

//        let notecard=document.getElementsByClassName('notecard')
//        Array.from(notecard).forEach(function(element){
//            let cardtxt
//        });
// })