
    // Function to create the element
    export function createWorkElement(data) {

        const workPDiv = document.createElement('div');
        workPDiv.className = 's1-div-work-p';

        const h3 = document.createElement('h3');
        h3.textContent = data.title;

        const pHidden = document.createElement('p');
        pHidden.className = 's1-p-hidden';
        pHidden.textContent = data.description;

        const iconAndPWrapDiv = document.createElement('div');
        iconAndPWrapDiv.className = 's1-div-iconandpwrap';

        const techP = document.createElement('p');
        techP.textContent = data.technologies;

        const iconImg = document.createElement('img');
        iconImg.src = data.iconSrc;

        iconAndPWrapDiv.appendChild(techP);
        iconAndPWrapDiv.appendChild(iconImg);

        workPDiv.appendChild(h3);
        workPDiv.appendChild(pHidden);
        workPDiv.appendChild(iconAndPWrapDiv);
        workPDiv.classList.add('s1-div-work-p-inactive')

        const imgWrapDiv = document.createElement('div');
        imgWrapDiv.classList.add('s1-div-imgwrap');
        imgWrapDiv.style.display = 'none';

        const ul = document.createElement('ul');
        ul.className = 's1-ul-pcormob';

        data.links.forEach(linkText => {
            const li = document.createElement('li');
            if (linkText === "git repo") {
                const a = document.createElement('a');
                a.href = "#"; // Replace with actual URL
                a.target = "_blank";
                a.textContent = linkText;
                li.appendChild(a);
            } else {
                li.textContent = linkText;
            }
            ul.appendChild(li);
        });

        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrap';

        ul.appendChild(wrapDiv);
        imgWrapDiv.appendChild(ul);

        const workImg = document.createElement('img');
        workImg.src = data.imageSrc;
        workImg.className = 's1-img-workimg';

        imgWrapDiv.appendChild(workImg);

        const main = document.querySelector('.s1-div-main-work')
        const worklist = document.querySelector('.s1-div-worklist')

        worklist.appendChild(workPDiv);
        main.appendChild(imgWrapDiv);
        console.log(main);
    }