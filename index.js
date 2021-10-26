const imgSlider = document.querySelector('.img-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const allImg = document.querySelectorAll('img');

let startPossition = 1;


prevBtn.addEventListener('click', ()=> {

    if(startPossition === 0){
        return
    }

    imgSlider.style.transition = '.5s';
    startPossition = startPossition - 1; 
    
    imgSlider.style.transform = `translateX(${startPossition*-400}px)`;


    
})

nextBtn.addEventListener('click', ()=> {

    if(startPossition === allImg.length-1){return};


        imgSlider.style.transition = '.5s';
        startPossition = startPossition + 1; 
        imgSlider.style.transform = `translateX(${startPossition*-400}px)`;
    




})





imgSlider.addEventListener('transitionend', finalCheck)


function finalCheck(){



    if(startPossition === 0){
        imgSlider.style.transition = 'none';
        startPossition = allImg.length-2;
        imgSlider.style.transform = `translateX(${startPossition*-400}px)`;
    }

    if(startPossition === allImg.length-1){
        imgSlider.style.transition = 'none';
        startPossition = 1;
        imgSlider.style.transform = `translateX(${startPossition*-400}px)`;
    }


}

