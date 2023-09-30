let textearea = document.querySelector('.text');
let notes = document.querySelector('.notes')

let myNotes = [];
let div;



const colors = ['Moccasin','Lightcoral','HotPink','Gold','DarkOrange','GreenYellow','Turquoise','Fuchsia or Magenta'];


// unhides the note maker
function createNewNote(){
    document.querySelector('.cardCreator').style.display= 'block';
};


//make note maker to be hidden
function hideFun(){
    document.querySelector('.cardCreator').style.display = 'none'
};


//the function which makes the new notes
//it pushesh the text in to the p tag
//and adds the p tag to div tag 
//the adds the div atg to the main div
function insertFun(){
    //generating a random number to use adding colors to the new notes
    // and degree to add to the notes
    let colorPicker = Math.floor(Math.random() * (colors.length - 0));
    let degMaker =Math.floor(Math.random() *(90-0))



    div = document.createElement('div');
    let p = document.createElement('p');

    div.className = 'note'

    p.innerHTML = textearea.value;
    div.appendChild(p);
    myNotes.push(div);
    local();

    notes.appendChild(div);


    //giving note a color and a random degree using map method
    myNotes.map(item => {
        myNotes[myNotes.length -1 ].style.backgroundColor = colors[colorPicker];
    });
    myNotes.map(item => {
        myNotes[myNotes.length -1 ].style.transform =  `rotate(${degMaker}deg)`;
    });




    textearea.value =''

};


// setting Enter keydown for the textarea to
// add new note when pushing  ENter button on keyboard
textearea.addEventListener('keydown', (event) => {
    if(event.key =="Enter"){
        insertFun()
    }
});




function local(){
    localStorage.setItem('note', JSON.stringify(myNotes));
};