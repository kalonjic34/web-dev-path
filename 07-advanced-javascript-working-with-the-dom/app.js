let paragraphElement = document.querySelector('p')

function changeParagraphtext(){
    paragraphElement.textContent = "Clicked!"
    console.log("Paragraph clicked!");
    
}

paragraphElement.addEventListener('click', changeParagraphtext)
