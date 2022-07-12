const canvasSize = 960;
const canvas = document.querySelector(".container")
const changeResBtn = document.querySelector('.change-res-btn')
const currResText = document.querySelector('.curr-res');

changeResBtn.addEventListener('click', changeRes);

function changeRes() {
    res = prompt('What would you like the canvas resolution to be? (A.K.A. number of boxes per row)');
    if (res > 100) {
        currResText.textContent = `error: resolution must be less than 100`
        return;
    }
    deleteAllChildren(canvas);
    addDivs(res);
    setCurrResText(res);
}

function setCurrResText(res) {
    currResText.textContent = `The current resolution is ${res} x ${res} px`
}

function deleteAllChildren(elem) {
    let child = elem.lastElementChild;
    while (child) {
        elem.removeChild(child);
        child = elem.lastElementChild;
    }
    opacityArr.clear()
}

let opacityArr = []

function addDivs(divPerRow) {
    for (let i = 0; i < divPerRow ** 2; i++) 
    {
        let div = document.createElement('div');
        div.id = `${i}`
        opacityArr.push(10);
        div.classList.add('box');
        div.style.width = canvasSize / divPerRow + 'px';
        div.style.height = canvasSize / divPerRow + 'px';
        div.style.backgroundColor = '#fffe'

        canvas.appendChild(div);

        div.addEventListener('mouseover', colorDiv);

    }
}

function colorDiv(e) {
    
    opacity = (Math.floor((--opacityArr[+e.target.id])/10*256)).toString(16);
    //console.log(opacityArr[+e.target.id]);
    randomColor = getRandomColor()
    e.target.style.backgroundColor = randomColor + opacity;
}

function getRandomColor()
{
    return '#ffffff';
}

addDivs(32);

