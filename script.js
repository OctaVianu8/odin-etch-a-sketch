const canvasSize=960;
const canvas = document.querySelector(".container")
const changeResBtn = document.querySelector('.change-res-btn')

changeResBtn.addEventListener('click', changeRes);

function changeRes()
{
    res = prompt('What would you like the canvas resolution to be? (A.K.A. number of boxes per row)');
    deleteAllChildren(canvas);
    addDivs(res);
    setCurrResText(res);
}

function setCurrResText(res)
{
    const currResText = document.querySelector('.curr-res');
    currResText.textContent = `The current resolution is ${res} x ${res} px`
}

function deleteAllChildren(elem)
{
    let child = elem.lastElementChild;
    while(child)
    {
        elem.removeChild(child);
        child=elem.lastElementChild;
    }
}

function addDivs(divPerRow)
{
    for(let i=0; i<divPerRow; i++)
    {
        for(let j=0; j<divPerRow; j++)
        {
            let div = document.createElement('div');
            div.classList.add('box');
            div.style.width=canvasSize/divPerRow + 'px';
            div.style.height=canvasSize/divPerRow + 'px';

            canvas.appendChild(div);

            div.addEventListener('mouseover', colorDiv);
        }
    }
}

function colorDiv(e) {
    e.target.style.backgroundColor = 'black';
}

addDivs(64);

