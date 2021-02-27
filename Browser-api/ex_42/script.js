window.onload = function () {
    let images = [
        'batmanwb.png',
        'flashwb.png',
        'supermanwb.png',
        'wonder_womanwb.png'
    ];
    let heroNames = [
        'batman',
        'flash',
        'superman',
        'wonder_woman'
    ];
    const bodyElement = document.querySelector('body');
    let index = 0;
    images.forEach(function (image) {
        const imageElement = document.createElement('img');
        imageElement.src = `img/${image}`
        imageElement.setAttribute('name', `${heroNames[index]}`)
        index++
        bodyElement.appendChild(imageElement);
        const messageImage = ()=> {
            alert(imageElement.getAttribute('name').toUpperCase());
        };
        imageElement.onclick = messageImage;
        const activeImage = ()=>{
            imageElement.src = `img/${imageElement.getAttribute('name')}.png`;
        };
        imageElement.onmouseover = activeImage;
        const inactiveImage = ()=>{
            imageElement.src = `img/${image}`
        };
        imageElement.onmouseout = inactiveImage;
    });
}



