
export default function() {
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.classList.add('header');

    heading.textContent = "ልብሴ ሬስቶራንት";
    heading.classList.add('brand-name')

    const wellcomeText = document.createElement('div');
    wellcomeText.textContent = "እንኳን ደህና መጡ"
    wellcomeText.classList.add('wellcome-text');

    content.append(heading, wellcomeText);
}