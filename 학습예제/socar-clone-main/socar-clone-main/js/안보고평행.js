const incline = document.querySelector('#start-together > .incline')

window.addEventListener('scroll', () =>{
    if(incline.getBoundingClientRect().top - window.innerHeight < 0) {
        incline.classList.add('active');
    }else {
        incline.classList.remove('active');
    }
})