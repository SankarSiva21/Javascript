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

const list = document.querySelector('ol'); // selects the ol in the page 
list.nodeType; // gives the node type/reference number https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

const listItem = list.children.item(1); // selects the child elemt 
// listItem.textContent = "New constnt"; // will change the content of the of sn element 

const listButton = document.querySelector('#list-item');

function changeListContent() {
    const list = document.querySelector('ol');
    const listItem = list.children.item(2);
    listItem.textContent = "New Content";
}
listButton.onclick = changeListContent;