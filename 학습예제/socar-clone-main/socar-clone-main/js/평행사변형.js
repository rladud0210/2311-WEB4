const 평행사변형 = document.getElementsByClassName('incline')


window.addEventListener('scroll',() => {
    if(평행사변형[0].getBoundingClientRect().top - window.innerHeight < 0) {
        평행사변형[0].classList.add('active');
    } else {
        평행사변형[0].classList.remove('active');
    }
})




// ↓ querySelector

// const 평행사변형 = document.querySelector('#start-together > .incline.active ')


// window.addEventListener('scroll',() => {
//     if(평행사변형.getBoundingClientRect().top - window.innerHeight < 0) {
//         평행사변형.classList.add('active');
//     } else {
//         평행사변형.classList.remove('active');
//     }
// })