export default function() {
    const aboutText = document.createElement('h3');
    aboutText.textContent = 'ሊያገኙን ከፈለጉ ወደ ሬስትራንታችን ይምጡ።';

    const content = document.querySelector('#content');
    content.appendChild(aboutText);   
}