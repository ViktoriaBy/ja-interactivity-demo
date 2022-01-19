const counter = document.querySelector('#counter');

const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');
const plusBtn = document.querySelector('#plus-btn');


let count = 0;

function increaseCount(){
    count += 1;

    counter.textContent = count;
}



function resetCount(){
    count = 0;

    counter.textContent = count;
}



function decreaseCount(){
    count --;

    counter.textContent = count
}

minusBtn.addEventListener('click', decreaseCount)
resetBtn.addEventListener('click', resetCount);
plusBtn.addEventListener('click', increaseCount)


let themebtns = document.querySelectorAll('.theme-buttons');

for(let i =0; i < themebtns.length; i++){
    themebtns[i].addEventListener('click', selectTheme);
}

function selectTheme(e){
    let theme = e.target.textContent;

    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;
}