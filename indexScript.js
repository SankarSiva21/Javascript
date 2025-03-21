const btn = document.querySelector('#btn-1');
function addParagraph() {
    console.log('The button is successfully working')
}

// btn.addEventListener('clcck', addParagraph);
btn.onclick = addParagraph;

