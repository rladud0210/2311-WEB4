// 기본
    //보이기
    //숨기기

// 스크롤
    // 보이기
    // 숨기기


const header = document.querySelector('header')

posY = 0;

window.addEventListener('scroll', ()=>{
    if(posY > window.scrollY) {
        header.classList.add(hide)
    }else{
        header.classList.remove(hide)
    }

    if(window.scrollY === 0) {
        header.classList.hide(scrolled)
    }else{
        header.classList.add(scrolled)
    }

    posY = window.scrollY
})