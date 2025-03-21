const btn = document.querySelector('#btn-1');
function addParagraph() {
    let ramdomNumber = Math.floor(Math.random() * 10);
    const pContent = 'The random number is :'+ ramdomNumber;

    const newElement = document.createElement('p');
    newElement.textContent = pContent;
    
    document.body.appendChild(newElement);
}

// btn.addEventListener('clcck', addParagraph);
btn.onclick = addParagraph; 

