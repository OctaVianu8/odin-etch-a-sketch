const canvas = document.querySelector(".container")
const changeResBtn = document.querySelector('.change-res-btn')
const currResText = document.querySelector('.curr-res')
const monochromeBtn = document.querySelector('.monochrome-btn')
let monochrome = false
const canvasSize = 960

changeResBtn.addEventListener('click', changeRes)
monochromeBtn.addEventListener('click', monochromeToggle)

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
    let divOpacity = --opacityArr[+e.target.id];
    opacity = (divOpacity >= 0) ? Math.floor(divOpacity/10*256).toString(16) : '00'
    console.log(opacity);
    randomColor = (monochrome) ? '#ffffff' : getRandomColor()
    e.target.style.backgroundColor = randomColor + opacity;
}

function getRandomColor()
{
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let result = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
    console.log(result);
    return result;
}

function monochromeToggle()
{
    monochrome = !monochrome;
    monochromeBtn.textContent = (monochrome) ? 'Monochrome: On' : 'Monochrome: Off'
}

addDivs(32);

