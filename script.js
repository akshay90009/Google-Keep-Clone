 const addButton=document.querySelector('.button');
const updateDate=()=>{
    const textareaData=document.querySelectorAll('textarea');
    const notes=[];
    console.log(textareaData);
    textareaData.forEach((note)=>{
return notes.push(note.value);
    }) 

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote=(text='')=>{
const note=document.createElement('div');
note.classList.add('textarea-container');

const htmlData=` 
<textarea name="foo"></textarea>
<div class="main "></div>
        
<button class="edit"><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash"></i></button>
`;

note.insertAdjacentHTML('afterbegin',htmlData);
 


const editButton=note.querySelector('.edit');
const deleteButton=note.querySelector('.delete');
const mainDiv=note.querySelector('.textarea-container');
const textarea=note.querySelector('textarea');


deleteButton.addEventListener('click',()=>
{
    note.remove();
})


textarea.addEventListener('change',(event)=>{
    const value=event.target.value;
    
     updateDate();
})

 
document.body.appendChild(note);





}


 addButton.addEventListener('click',()=> addNewNote());