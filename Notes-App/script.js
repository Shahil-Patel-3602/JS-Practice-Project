const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to create a new input box when the create button is clicked.
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


// Function to remove the input box when the delete button is clicked.
notesContainer.addEventListener("click", (e) => {
    // If the target element is images, i.e. in our case if the delete button is clicked, then remove the parent element of the image, i.e. the input box.
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((note) => {
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})