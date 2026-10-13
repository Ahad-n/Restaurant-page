export default function() {
    const intro = document.createElement('h2');
    intro.textContent = "የለለን የምግብ አይነት የለም (ከገንፎ በስተቀር)";

    // append special food list
    const special = document.createElement('div');
    const specialHeading = document.createElement('h3');
    specialHeading.textContent = 'ስፔሻሎች';
    special.classList.add('list');

    const specialList = document.createElement('ul');
    
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    
    li1.textContent = "ዶሮ";
    li2.textContent = "ጥብስ";
    li3.textContent = "ቀይ ጥብስ";
    li4.textContent = "አጥንት ቅቅል";
    li5.textContent = "ቅቅል መረቅ ፍርፍር";

    specialList.append(li1, li2, li3, li4, li5);
    special.append(specialHeading, specialList);

    // append unique food 
    const uniques = document.createElement('div');
    const uniquesHeading = document.createElement('h3');
    uniquesHeading.textContent = 'የትም የማይገኙ';
    uniques.classList.add('list');

    const uniquesList = document.createElement('ul');

    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');

    li6.textContent = 'ድንች በምስር';
    li7.textContent = 'የእርድ ሻይ';
    li8.textContent = 'የስልስ ሽሮ';
    
    uniquesList.append(li6, li7, li8);
    uniques.append(uniquesHeading, uniquesList);

    // append quick foods

    const quicks = document.createElement('div');
    const quicksHeading = document.createElement('h3');
    quicksHeading.textContent = 'ለቸኮሉ';
    quicks.classList.add('list');

    const quicksList = document.createElement('ul');

    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const li11 = document.createElement('li');

    li9.textContent = 'ሽሮ';
    li10.textContent = 'አስቸኳይ ፍርፍር';
    li11.textContent = 'አስቸኳይ ጥብስ';

    quicksList.append(li9, li10, li11);
    quicks.append(quicksHeading, quicksList);

    const content = document.querySelector('#content');
    content.append(special, uniques, quicks);
}