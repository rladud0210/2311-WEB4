// 헤더
    // 기본 // 숨어있는 // 스크롤

const header =  document.querySelector('header')
const advantage = document.getElementsByClassName

posY = 0;

window.addEventListener('scroll',(e)=>{
    if(posY < window.scrollY) {
        header.classList.add ('hide');
    }else{
        header.classList.remove('hide');
    }

    if(window.scrollY < 50) {
        header.classList.remove ('scrolled');
    }else{
        header.classList.add('scrolled');
    }

    posY = window.scrollY
})

// 메인컨텐츠
    // 스크롤 내릴 때 제자리로
    // scroll-inter(옆으로) // active(제자리로)
    // 반복믄



