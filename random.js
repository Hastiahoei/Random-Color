const hexValueElement = document.querySelector('.hex-value');

function generateHEX(){
    let randomHex = 
        Math.random() //random number btwn 0 and 1
        .toString(16) 
        .substr(-6);  
    let randomHexColor = `#${randomHex}`;    
    hexValueElement.textContent = randomHexColor;
    document.body.style.background = randomHexColor;     
}

function keybord(event){
    if(event.code == 'Space'){
        generateHEX();
    }
}

// click on HEX value
hexValueElement.addEventListener('click', generateHEX);

// click on spacebar
window.addEventListener('keydown', keybord);