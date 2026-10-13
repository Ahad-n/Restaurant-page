import foodImage from "./assets/meskkot.jpg";

export default function() {
    const content = document.querySelector('#content');
    const image = document.createElement('img');
    const heading = document.createElement('h1');
    heading.classList.add('header');

    image.src = foodImage;
    heading.textContent = "ልብሴ ሬስቶራንት";

    content.append(heading, image);
}