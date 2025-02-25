let paragraphElement = document.querySelector('p')

function changeParagraphtext(){
    paragraphElement.textContent = "Clicked!"
    console.log("Paragraph clicked!");
    
}

paragraphElement.addEventListener('click', changeParagraphtext)


let inputElement = document.querySelector('input')

function retrieveUserInput(event){
    // let enteredText = inputElement.value
    let enteredText = event.target.value
    console.log(enteredText);
    // console.log(event);
    
}

inputElement.addEventListener('input',retrieveUserInput)